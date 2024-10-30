'use client'

import Link from 'next/link'
import { Globe } from 'lucide-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import SignInForm from './form'

export default function SignIn() {
  return (
    <CardContent>
      <CardDescription className="text-center mb-4">
        Welcome back! Please enter your details.
      </CardDescription>
      <SignInForm />
      <CardFooter className="flex flex-col items-center justify-center space-y-4 mt-6">
        <p className="text-sm text-muted-foreground">
          No account yet?{' '}
          <Link
            href="/auth/sign-up"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              signIn('google', {
                redirectTo: '/home',
              })
            }
          >
            <Globe className="mr-2 h-4 w-4" />{' '}
            {/* Use official Google logo */}
            Sign In with Google
          </Button>
        </div>
      </CardFooter>
    </CardContent>
  )
}
