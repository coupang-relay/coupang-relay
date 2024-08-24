'use client'

import styled from 'styled-components'

import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        <Title>쿠팡 릴레이</Title>
        <div className="flex items-center">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>

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
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
