'use client';

import * as React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Navigation() {
  const { data: session, status } = useSession();
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {[
          { href: '/docs', label: 'Documentation' },
          { href: '/home', label: 'Home' },
          { href: '/donations', label: 'Donations' },
          { href: '/profile', label: 'Profile' },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <button onClick={() => signOut()}>SIGN OUT</button>
    </NavigationMenu>
  );
}
