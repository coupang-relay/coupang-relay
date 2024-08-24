'use client'

import { RelayCard } from '@/components/RelayCard'
import { RelayCardMock } from '@/components/RelayCardMock'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import styled from 'styled-components'

export default function Page() {
  const totalSlides = 1

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 overflow-y-auto w-full">
        <section className="flex flex-col w-full">
          <RelayTitle />
          <div className="relative overflow-hidden">
            <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-3">
              {['eats-1', 'eats-2', 'eats-3', 'eats-4'].map((id) => (
                <RelayCard key={id} id={id} />
              ))}
              <RelayCardMock />
              <RelayCardMock />
              <RelayCardMock />
              <RelayCardMock />
              <RelayCardMock />
            </ul>
          </div>
        </section>

        {/* search */}
        <div className="flex justify-center items-center mt-1 px-4">
          <form
            className="text-muted-foreground flex items-center rounded-md px-[18px] w-full max-w-[400px] h-[52px]"
            style={{ borderRadius: 40, background: '#FAFAFA' }}
          >
            <div className="flex items-center">
              <Search className="w-4 h-4" />
            </div>
            <StyledInput placeholder="권은채님, 요아정 어때요?" className="w-full bg-transparent" />
          </form>
        </div>

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
        <section className="relative mb-4 px-4 mt-1 flex justify-center">
          <div className="overflow-hidden rounded-lg max-w-[400px]">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div key={0} className="flex-shrink-0 w-full snap-center max-w-[400px]">
                <Image alt="" src="/assets/banner-2.png" width={400} height={179} />
              </div>
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

const StyledInput = styled(Input)`
  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
    font-weight: 600;
  }
`
