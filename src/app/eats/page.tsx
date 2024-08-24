'use client'

import { RelayCard } from '@/components/RelayCard'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'
import Image from 'next/image'

export default function Page() {
  const totalSlides = 2

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Header />;{' '}
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

        <div className="flex mx-auto w-fit">
          <Image
            alt=""
            src="/assets/eats-menu.png"
            width={390 * 2}
            height={176 * 2}
            style={{ width: 390, height: 176 }}
          />
        </div>

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
      </main>
    </div>
  )
}
