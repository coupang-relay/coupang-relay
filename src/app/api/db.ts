import { readFile } from 'fs/promises'
import path from 'path'

export type Product = {
  id: number
  name: string
  coupang_product_id: number
  category: string
  price: number
  base_price: number
  discount_rate: number
  thumbnail_src: string
  created_at: string
  stock_count: number
  sold_count: number
  description: string | null
}

export type ProductPaginationOptions = {
  page: number
  size: number
}

export type ProductPaginatedResult = {
  items: Product[]
  totalPages: number
  currentPage: number
}

class ProductDatabase {
  private static instance: ProductDatabase | null = null
  private products: Product[] = []

  private constructor() {}

  static async getInstance(): Promise<ProductDatabase> {
    if (!ProductDatabase.instance) {
      ProductDatabase.instance = new ProductDatabase()
      await ProductDatabase.instance.initialize()
    }
    return ProductDatabase.instance
  }

  private async initialize(): Promise<void> {
    try {
      const filePath = path.join(process.cwd(), 'data', 'product.json')
      const fileContent = await readFile(filePath, 'utf-8')
      this.products = JSON.parse(fileContent)
    } catch (error) {
      console.error('Error reading or parsing the product file:', error)
      throw error
    }
  }

  private paginate(items: Product[], options: ProductPaginationOptions): ProductPaginatedResult {
    const { page, size } = options
    const totalItems = items.length
    const totalPages = Math.ceil(totalItems / size)
    const currentPage = Math.max(1, Math.min(page, totalPages))
    const startIndex = (currentPage - 1) * size
    const endIndex = Math.min(startIndex + size, totalItems)

    return {
      items: items.slice(startIndex, endIndex),
      totalPages,
      currentPage,
    }
  }

  list(options: ProductPaginationOptions): ProductPaginatedResult {
    return this.paginate(this.products, options)
  }

  search(searchTerm: string, options: ProductPaginationOptions): ProductPaginatedResult {
    const lowerSearchTerm = searchTerm.toLowerCase()
    const filteredProducts = this.products.filter(
      (product) =>
        product?.name?.toLowerCase()?.includes(lowerSearchTerm) ||
        product?.category?.toLowerCase()?.includes(lowerSearchTerm)
    )
    return this.paginate(filteredProducts, options)
  }
}

export default ProductDatabase
