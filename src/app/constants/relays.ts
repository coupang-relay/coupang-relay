import { type Product } from '../api/db'

export type RelayItem = {
  img: string
  product: Product
}

export const RELAY_1 = {
  img: '/img/relay/1.jpeg',
  product: {
    id: 20534512837,
    name: '3CE 쓰리씨이 블러 워터 틴트',
    coupang_product_id: 20534512837,
    category: '틴트/립글로스',
    price: 13160,
    base_price: 18000,
    discount_rate: 26,
    thumbnail_src:
      'https://image7.coupangcdn.com/image/vendor_inventory/e1a0/441d508b755d1c761f9e7f1bd4a7d554b606888cefc61a0a5b62999eddfe.jpg',
    created_at: '',
    stock_count: 0,
    sold_count: 0,
    description: '',
  },
}
