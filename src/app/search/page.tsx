'use client'

import styled from 'styled-components'
import { useState } from 'react'
import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'
import { useEffect } from 'react'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'

import { useSearchParams } from 'next/navigation'

import { type Product } from '../api/db'

export default function Home() {
  const params = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [defaultQueryValue, setDefaultQueryValue] = useState<string>('')

  useEffect(() => {
    const query = params.get('query')
    if (!query) {
      return
    }
    setDefaultQueryValue(query)

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
      <Header defaultQueryValue={defaultQueryValue} />

      <RelayTitle />

      <div className="relative overflow-hidden">
        <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-3">
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
