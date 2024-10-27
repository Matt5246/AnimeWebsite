import React from 'react'
import Footer from '@/app/footer'
import NavBar from '@/components/NavBar'
import { ModeToggle } from '@/components/toggleTheme'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-16 px-4 flex justify-between border-b shadow-md select-none">
        <NavBar />
        <ModeToggle />
      </nav>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
