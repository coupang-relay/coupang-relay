'use client'

import styled from 'styled-components'

import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Title>쿠팡 릴레이</Title>
      <div className="relative overflow-hidden">
        <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-2">
          {[1, 2, 3].map((id) => (
            <ReviewCard key={id} id={id} />
          ))}
        </ul>
      </div>
      <section>
        <ul className="flex flex-col">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </ul>
      </section>
    </main>
  )
}

const Title = styled.h2`
  padding: 16px;
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
