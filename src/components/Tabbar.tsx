'use client'

import Link from 'next/link'
import { Home, Menu, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

export const Tabbar: React.FC = () => {
  const pathname = usePathname()

  if (pathname.startsWith('/detail/')) {
    return (
      <>
        <div className="flex w-full h-[100px]" />

        <nav className="fixed left-0 right-0 bottom-0 flex justify-around items-center pt-3 pb-[32px] px-2 border-t bg-white gap-2">
          <Link className="flex-1 h-[44px]" href="/menu">
            <Button className="hover:opacity-65 transition-opacity text-base w-full h-[44px] !text-[#346AFF] !bg-white border border-[#5985FF]">
              장바구니 담기
            </Button>
          </Link>
          <Link className="flex-1 h-[44px]" href="/">
            <Button className="hover:opacity-65 transition-opacity text-base w-full h-[44px] !bg-[#346AFF] !text-white">
              바로구매
            </Button>
          </Link>
        </nav>
      </>
    )
  }
  return (
    <>
      {/* bottom padding >= as tabbar height */}
      {!pathname.startsWith('/relay/') && <div className="flex w-full h-[50px]" />};{' '}
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
