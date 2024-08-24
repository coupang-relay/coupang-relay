'use client'

import styled from 'styled-components'
import { RelayCard } from '@/components/RelayCard'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const totalSlides = 2

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 overflow-y-auto">
        <section className="mb-4">
          <RelayTitle />

          <div className="relative overflow-hidden">
            <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-3">
              {[1, 2, 3].map((id) => (
                <RelayCard key={id} id={id} />
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
        <section className="grid grid-cols-4 gap-2 px-4 mb-4 max-w-[400px] w-full mx-auto">
          {['로켓배송', '로켓프레시', '로켓직구', '쿠팡라이브'].map((serviceName, i) => (
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
      </main>
    </div>
  )
}

const ServiceName = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
