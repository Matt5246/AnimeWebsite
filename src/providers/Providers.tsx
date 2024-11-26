'use client';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeWrapper } from '@/components/theme/theme-wrapper';
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import ReactQueryProvider from './ReactQueryProvider';
import '@/styles/themes.css';
interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeWrapper>
        <ReactQueryProvider>
          <SessionProvider>{props.children}</SessionProvider>
          <Toaster />
        </ReactQueryProvider>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default Providers;
