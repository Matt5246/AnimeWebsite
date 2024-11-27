import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser)
    return new Response(JSON.stringify({ error: 'User already exists' }), {
      status: 400,
    });

  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return new Response(
    JSON.stringify({ message: 'User created successfully' }),
    { status: 201 }
  );
}
