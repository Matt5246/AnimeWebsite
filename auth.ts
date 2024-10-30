import NextAuth from 'next-auth';

import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import prisma from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { randomUUID } from 'crypto';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          const user = await prisma.user.findUnique({
            where: { email: email as string },
          });

          if (!user || !user.password) {
            throw 'User account does not exist';
          }

          const passwordmatch = await bcrypt.compare(
            password as string,
            user.password
          );
          if (!passwordmatch) {
            throw 'Pasword is Incorrect';
          }
          return user as any;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'database',
  },
  callbacks: {
    async jwt({ account, user, token }) {
      if (account?.provider === 'credentials') {
        const sessionToken = randomUUID();
        const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);

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
    signIn: '/auth/login',
    signOut: '/',
  },
  trustHost: true,
});
