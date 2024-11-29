'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import DangerAlert from '@/components/custom/danger-alert';

import { signInSchema, signInType } from '@/schema/zod-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignInForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<signInType>({
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(values: signInType) {
    setIsPending(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (res?.error) {
        // Map all the Auth.js errors for later convience
        const errorMessages: Record<string, string> = {
          Configuration:
            "There's an issue with the authentication setup. Please contact support.",
          CredentialsSignin: 'Invalid email or password.',
          AccessDenied:
            'You do not have permission to access this resource.',
          Verification:
            'The verification request is invalid or has expired. Please try again.',
          OAuthSignin:
            'There was an error signing in with the OAuth provider. Please try again.',
          OAuthCallback:
            'An error occurred during the OAuth callback. Please try again.',
          OAuthCreateAccount:
            'There was an issue creating your account with the OAuth provider.',
          EmailCreateAccount:
            'There was an error creating your account with the provided email.',
          Callback:
            'An error occurred during the sign-in callback. Please try again.',
          AccountNotLinked:
            'Please use the same sign-in method you used before (e.g., Google, GitHub, etc.).',
          SessionRequired: 'You must be signed in to access this page.',
          Default: 'An unknown error occurred. Please try again later.',
        };
        form.setError('root', {
          message:
            errorMessages[res.error] ||
            'An unexpected error occurred. Please try again.',
        });
      } else router.push('/home');
    } catch (error) {
      form.setError('root', {
        message:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="test@anime.com"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="anime123" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isPending ? 'Loading...' : 'Submit'}
        </Button>
      </form>
      {form.formState.errors.root && (
        <DangerAlert
          title="Sign In Error"
          message={form.formState.errors.root.message as string}
        />
      )}
    </Form>
  );
}
