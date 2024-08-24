'use client'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Search, ShoppingCart, SquarePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

type HeaderProps = {
  defaultQueryValue?: string
}

export const Header: React.FC<HeaderProps> = ({ defaultQueryValue = '' }) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(defaultQueryValue)
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }
  return (
    <header className="flex flex-col sticky top-0 left-0 right-0 bg-background z-20">
      <div className="grid grid-cols-2 p-2">
        <Link href="/">
          <Logo className="h-10 p-2 pt-4 mr-auto" />
        </Link>
        <div className="flex justify-end items-center">
          <Link href="/new-relay">
            <Button className="text-muted-foreground" variant="ghost" size="icon">
              <SquarePlus className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button className="text-muted-foreground" variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center px-3 pb-3">
        <form onSubmit={handleSearch} className="text-muted-foreground flex items-center border rounded-md px-2 w-full">
          <div className="flex items-center">
            <Search className="w-4 h-4" />
          </div>
          <Input
            placeholder="검색어를 입력해주세요"
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  )
}
