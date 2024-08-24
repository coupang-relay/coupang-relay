'use client'

import styled from 'styled-components'

import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        <Title>쿠팡 릴레이</Title>
        <ul className="mx-4 my-4 flex items-center">
          <ReviewCard id={0} />
          <ReviewCard id={1} />
          <ReviewCard id={2} />
        </ul>
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
  padding: 16px 16px 0;

  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
