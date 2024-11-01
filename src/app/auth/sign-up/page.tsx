'use client';
import Link from 'next/link';

import {
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import SignUpForm from './form';

export default function SignIn() {
  return (
    <CardContent>
      <CardDescription className="text-center mb-4">
        Create an account to get started
      </CardDescription>
      <SignUpForm />
      <CardFooter className="flex flex-col items-center justify-center space-y-4 mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/auth/sign-in"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </CardContent>
  );
}
