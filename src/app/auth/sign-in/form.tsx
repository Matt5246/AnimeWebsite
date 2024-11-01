'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

import { signIn } from 'next-auth/react';
import { signInSchema, signInType } from '@/schema/zod-form';

export default function SignInForm() {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<signInType>({
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(values: signInType) {
    try {
      setIsPending(true);

      const res = await signIn('credentials', {
        redirect: true,
        email: values.email,
        password: values.password,
      });

      setIsPending(false);

      if (!res?.error) {
        console.log('successfully logged in');
      } else {
        const message = 'Invalid email or password';
        console.log(message);
      }
    } catch (error: any) {
      console.error(error);
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
    </Form>
  );
}
