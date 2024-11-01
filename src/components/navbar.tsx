'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useSession } from 'next-auth/react';

export default function Navigation() {
  const { data: session, status } = useSession(); //Add loading skeleton when status === 'loading'

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {[
          { href: '/docs', label: 'Documentation' },
          { href: '/home', label: 'Home' },
          { href: '/donations', label: 'Donations' },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        {session ? (
          <NavigationMenuItem key="/profile">
            <Link href={'/profile'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key="/auth/sign-in">
            <Link href={'/auth/sign-in'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign In
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
