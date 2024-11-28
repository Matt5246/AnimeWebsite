'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { AlertCircle } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
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
        const errorMessages: Record<string, string> = {
          Configuration:
            "There's an issue with the authentication setup. Please contact support.",
          CredentialsSignin: 'Invalid email or password',
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
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Sign in error</AlertTitle>
          <AlertDescription>
            {form.formState.errors.root.message}
          </AlertDescription>
        </Alert>
      )}
    </Form>
  );
}
