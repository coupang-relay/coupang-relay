import { RelayCard } from '@/components/RelayCard'
import { ProductListItem } from '@/components/ProductListItem'
import { RelayTitle } from '@/components/RelayTitle'
import { Header } from '@/components/Header'
import ProductDatabase, { type Product } from '../api/db'
import Image from 'next/image'

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <RelayCard key={id} id={id} />
          ))}
        </ul>
      </div>
      <section>
        {products.length > 0 && (
          <ul className="flex flex-col">
            {products.map((product: Product) => (
              <ProductListItem key={product.id} {...product} />
            ))}
          </ul>
        )}
        {products.length === 0 && (
          <Image className="mx-auto mt-10 mb-[100px]" src="/assets/no-result.png" alt="" width={300} height={300} />
        )}
      </section>
    </main>
  )
}
