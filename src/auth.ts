import NextAuth from 'next-auth';
import { NextAuthConfig, CredentialsSignin } from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

import prisma from '@/lib/db';

class InvalidLoginError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.code = code;
    this.message = code;
  }
}

const Credential = Credentials({
  credentials: {
    email: { label: 'email', type: 'text' },
    password: { label: 'password', type: 'password' },
  },
  async authorize(credentials) {
    try {
      const email = credentials.email as string;
      const password = credentials.password as string;

      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!user || !user.password) {
        return null;
      }

      const passwordmatch = await bcrypt.compare(password, user.password);
      if (!passwordmatch) {
        throw 'Invalid password';
      }
      return user;
    } catch (error) {
      throw new InvalidLoginError(
        'System error has occured pleas contact the support team.'
      );
    }
  },
});

const config = {
  providers: [Google, Credential],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'database',
  },
  callbacks: {
    async jwt({ account, user, token }) {
      if (account?.provider === 'credentials') {
        const sessionToken = randomUUID();
        const expires = new Date(Date.now() + 60 * 60 * 24 * 1000); //One day

        const session = await PrismaAdapter(prisma).createSession!({
          userId: user.id!,
          sessionToken,
          expires,
        });
        token.sessionId = session.sessionToken;
      }
      return token;
    },
    session({ session }) {
      if (!session.user) return session;
      const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        emailVerified: session.user.emailVerified,
        image: session.user.image,
      };
      session.user = user;
      return session;
    },
  },
  jwt: {
    async encode({ token }) {
      return token?.sessionId as unknown as string;
    },
  },
  events: {
    async signOut(message) {
      if ('session' in message && message.session?.sessionToken) {
        await prisma.session.deleteMany({
          where: {
            sessionToken: message.session.sessionToken,
          },
        });
      }
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/',
  },
  trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
