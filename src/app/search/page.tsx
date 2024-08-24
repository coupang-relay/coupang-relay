import { ReviewCard } from '@/components/ReviewCard'
import { ProductListItem } from '@/components/ProductListItem'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'

import db, { type Product } from '../api/db'
import ProductDatabase from '../api/db'

export default async function Home({ searchParams }: { searchParams: { query: string } }) {
  const { query } = searchParams
  const db = await ProductDatabase.getInstance()
  const data = db.search(query, { page: 1, size: 30 })
  const products = data.items

  return (
    <main className="flex flex-col">
      <Header defaultQueryValue={query} />
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
          {products.map((product: Product) => (
            <ProductListItem key={product.id} {...product} />
          ))}
        </ul>
      </section>
    </main>
  )
}
