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
        <section className="flex flex-col w-full">
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
        <section className="relative mb-4 px-4 flex justify-center">
          <div className="overflow-hidden rounded-lg w-[400px]">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
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
        <section className="grid grid-cols-4 gap-2 px-4 mb-4 max-w-[400px] w-full mx-auto">
          {['로켓배송', '로켓프레시', '로켓직구', '쿠팡이츠'].map((serviceName, i) => (
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
