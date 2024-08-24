'use client'

import { Logo } from '@/components/logo'
import { ReviewCard } from '@/components/ReviewCard'
import { Button } from '@/components/ui/button'
import { Rocket, Search, ShoppingCart, SquarePlus } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const totalSlides = 2
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="flex flex-col bg-background text-foreground">
      <div className="grid grid-cols-2 p-2">
        <Logo className="h-10 p-2 pt-4 mr-auto" />
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
      <main className="flex-1 overflow-y-auto">
        <section className="mb-4">
          <h2 className="text-xl font-bold px-4 mb-2">100% 만족하는 화장품</h2>
          <div className="relative overflow-hidden">
            <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-2">
              {[1, 2, 3].map((id) => (
                <ReviewCard key={id} id={id} />
              ))}
            </ul>
          </div>
        </section>
        {/* Carousel ad banner */}
        <section className="relative mb-4 px-4">
          <div className="overflow-hidden rounded-lg">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {[...Array(totalSlides)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-full snap-center">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">잔뜩 담아도 안 무거워!</h3>
                    <p className="text-sm">국민템 최대 50% 할인</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(totalSlides)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-muted" />
            ))}
          </div>
        </section>
        {/* Service icons */}
        <section className="grid grid-cols-4 gap-4 px-4 mb-4">
          {['로켓배송', '로켓프레시', '로켓직구', '쿠팡라이브'].map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center ${['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][i]}`}
              >
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-center">{service}</span>
              <span className="text-xs text-muted-foreground">바로가기</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
