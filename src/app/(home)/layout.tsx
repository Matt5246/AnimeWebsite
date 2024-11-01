import React from 'react';
import Link from 'next/link';

import Footer from '@/app/footer';
import Navbar from '@/components/navbar';
import { ModeToggle } from '@/components/toggle-theme';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-16 px-4 flex justify-between border-b shadow-md select-none">
        <Navbar />
        <ModeToggle />
      </nav>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
