'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError, AxiosResponse } from 'axios';

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
import { Spinner } from '@/components/ui/spinner';

import { signUpSchema, signUpType } from '@/schema/zod-form';
import DangerAlert from '@/components/custom/danger-alert';

export default function SignUpForm() {
  const { mutate, isPending, isError, error } = useMutation<
    AxiosResponse,
    AxiosError,
    signUpType
  >({
    mutationKey: ['user'],
    mutationFn: async (values: signUpType) => {
      const response = await axios.post('/api/auth/sign-up', values);
      return response.data;
    },
  });

  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(values: signUpType) {
    mutate(values);
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
                  placeholder="test@anime-website.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="anime-website-dev"
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
                <Input
                  placeholder="password123#"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password123#"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isPending ? (
            <Spinner className="text-neutral-900" size="large" />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
      {isError && (
        <DangerAlert
          title="Sign Up Error"
          message={(error.response?.data as { error: string }).error}
        />
      )}
    </Form>
  );
}
