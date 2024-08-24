'use client'

import styled from 'styled-components'
import { useState } from 'react'
import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'
import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { type Product } from '../api/db'

export default function Home() {
  const params = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const query = params.get('query')
    if (!query) {
      return
    }

    const fetchData = async () => {
      const data = await fetch(`/api/search/${query}`)
      const response = await data.json()
      console.log(response)
      setProducts(response.items)
    }

    fetchData()
  }, [params])

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
          {products.map((product) => (
            <ProductListItem key={product.id} {...product} />
          ))}
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
