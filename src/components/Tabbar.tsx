'use client'

import Link from 'next/link'
import { Home, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const Tabbar: React.FC = () => {
  const pathname = usePathname()
  return (
    <>
      {/* bottom padding >= as tabbar height */}
      {!pathname.startsWith('/relay/') && <div className="flex w-full h-[50px]" />}{' '}
      <nav className="fixed left-0 right-0 bottom-0 flex justify-around items-center p-4 border-t bg-white">
        <Link href="/menu">
          <Menu className="h-6 w-6" />
        </Link>
        <Link href="/">
          <Home className="h-6 w-6" />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="h-6 w-6" />
        </Link>
        <Link href="/profile">
          <User className="h-6 w-6" />
        </Link>
      </nav>
    </>
  )
}
