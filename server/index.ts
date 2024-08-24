import { publicProcedure, router } from './trpc'
import { z } from 'zod'
import fs from 'fs/promises'
import path from 'path'
import { createHTTPServer } from '@trpc/server/adapters/standalone'

interface Product {
  id: number
  name: string
  coupang_product_id: number
  category: string
  price: number
  base_price: number | null
  discount_rate: number | null
  thumbnail_src: string
  created_at: string
  stock_count: number
  sold_count: number
  description: string | null
}

let products: Product[] = []

// Load products from JSON file
async function loadProducts() {
  const filePath = path.join(process.cwd(), 'product_2020-08-12.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  products = JSON.parse(fileContents)
}

// Load products when the server starts
loadProducts().catch(console.error)

const appRouter = router({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        limit: z.number().min(1).max(100).default(10),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const { query, limit, offset } = input
      // Perform search
      const searchResults = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(query.toLowerCase())) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )

      // Apply pagination
      const paginatedResults = searchResults.slice(offset, offset + limit)

      return {
        products: paginatedResults,
        total: searchResults.length,
        hasMore: offset + paginatedResults.length < searchResults.length,
      }
    }),
  getProducts: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.number().nullable().default(null),
        sortBy: z.enum(['price', 'created_at', 'sold_count']).default('created_at'),
        sortOrder: z.enum(['asc', 'desc']).default('desc'),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, sortBy, sortOrder } = input

      const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1
        }
      })

      // Find the starting index for pagination
      const startIndex = cursor ? sortedProducts.findIndex((p) => p.id === cursor) + 1 : 0

      // Slice the array for pagination
      const paginatedProducts = sortedProducts.slice(startIndex, startIndex + limit)

      return {
        items: paginatedProducts,
        nextCursor: paginatedProducts.length === limit ? paginatedProducts[paginatedProducts.length - 1].id : null,
      }
    }),
  list: publicProcedure.query(async () => {
    return products.slice(0, 100)
  }),
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
