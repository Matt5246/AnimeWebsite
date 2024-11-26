import React from 'react';

import Footer from '@/app/footer';
import Navbar from '@/components/navbar';
import { ThemeCustomizer } from '@/components/theme/theme-customizer';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-16 px-4 py-4 flex justify-between border-b shadow-md select-none">
        <Navbar />
        <ThemeCustomizer />
      </nav>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
