'use client'

import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { RelayCard } from '@/components/RelayCard'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ProductListItem } from '@/components/ProductListItem'

const ITEMS = [
  {
    id: 1800,
    name: '농심 카프리썬 오렌지, 200ml, 20개',
    coupang_product_id: 1580008099,
    category: '생수/음료',
    price: 7250,
    base_price: 8420,
    discount_rate: 13,
    thumbnail_src:
      'thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/70939530506095-c28febfa-b32a-4b43-9fef-a46e28477ee1.jpg',
    created_at: '2020-08-12T19:17:32',
    stock_count: 1000,
    sold_count: 0,
    description: null,
  },
  {
    id: 1888,
    name: '농심 카프리썬 오렌지망고, 200ml, 20개',
    coupang_product_id: 1580094573,
    category: '생수/음료',
    price: 7390,
    base_price: 8570,
    discount_rate: 13,
    thumbnail_src:
      'thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/70483370223326-15ffc3cc-4d6d-42ec-be70-b05aa914b51f.jpg',
    created_at: '2020-08-12T19:17:32',
    stock_count: 1000,
    sold_count: 0,
    description: null,
  },
  {
    id: 1701,
    name: '웅진 하늘보리, 500ml, 20개',
    coupang_product_id: 126294792,
    category: '생수/음료',
    price: 12200,
    base_price: 26000,
    discount_rate: 53,
    thumbnail_src:
      'thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/11/22/3904133275/bbf5838a-f88c-4b39-9ffc-d1c64d79ec97.jpg',
    created_at: '2020-08-12T19:17:32',
    stock_count: 1000,
    sold_count: 0,
    description: null,
  },
]

export default function Page() {
  const router = useRouter()

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const totalSlides = 2

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  //   }, 3000)

  //   return () => clearInterval(timer)
  // }, [])

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollToNextSlide = () => {
      if (scrollContainerRef.current) {
        const nextSlide = (currentSlide + 1) % totalSlides
        const scrollAmount = nextSlide * scrollContainerRef.current.offsetWidth
        scrollContainerRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        })
        setCurrentSlide(nextSlide)
      }
    }

    const timer = setInterval(scrollToNextSlide, 3000)

    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 overflow-y-auto">
        <section className="flex flex-col w-full">
          <RelayTitle />

          <div className="relative overflow-hidden">
            <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                <RelayCard key={id} id={id} />
              ))}
            </ul>
          </div>
        </section>

        {/* Carousel ad banner */}
        <section className="relative mt-1 mb-4 px-4 flex justify-center">
          <div className="overflow-hidden rounded-lg w-[400px]">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide transition-transform duration-300 ease-in-out"
            >
              {/* 1 */}
              <div className="flex-shrink-0 w-full snap-center max-w-[400px]">
                <Image alt="" src="/assets/banner-1-1.png" width={400} height={179} />
              </div>

              {/* 2 */}
              <div className="flex-shrink-0 w-full snap-center max-w-[400px]">
                <Image alt="" src="/assets/banner-1-2.png" width={400} height={179} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(totalSlides)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-muted" />
            ))}
          </div>
        </section>

        {/* Service icons */}
        <section className="grid grid-cols-4 gap-2 px-4 mb-12 max-w-[400px] w-full mx-auto">
          {['로켓와우', '로켓프레시', '쿠팡플레이', '쿠팡이츠'].map((serviceName, i) => (
            <div
              key={i}
              className="p-[10px] flex flex-col aspect-square items-center justify-center bg-[#F6F6F6] rounded-[8px] transition-all hover:translate-y-1 cursor-pointer gap-[5px]"
              onClick={() => router.push(`/eats`)}
            >
              <Image
                className="w-full max-w-[48px] aspect-square"
                alt={serviceName}
                src={`/assets/${['wow', 'fresh', 'play', 'eats'][i]}.png`}
                width={128}
                height={128}
              />
              <ServiceName className="text-xs text-center">{serviceName}</ServiceName>
            </div>
          ))}
        </section>

        <ul className="w-full flex flex-col">
          {ITEMS.map((item) => (
            <ProductListItem key={item.id} {...item} />
          ))}
        </ul>
      </main>
    </div>
  )
}

const ServiceName = styled.span`
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
