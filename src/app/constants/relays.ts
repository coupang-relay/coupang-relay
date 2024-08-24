import { type Product } from '../api/db'

export type RelayItem = {
  id: string
  img: string
  product: Product
}

export const RELAYS: RelayItem[] = [
  {
    id: '1',
    img: '/img/relay/1.jpg',
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
  },
  {
    id: '4',
    img: '/img/relay/4.jpg',
    product: {
      id: 10406,
      name: '홈리얼 눈뭉치 눈오리집게 대형 2개입',
      coupang_product_id: 7730224459,
      category: '완구/취미/스포츠/야외완구/모래놀이',
      price: 5900,
      base_price: 7900,
      discount_rate: 29,
      thumbnail_src:
        'thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/82ec/069ae45ddcf6dd2c5b8fbbc64045421f2b0614279e31087a22dddecd7cf0.png',
      created_at: '',
      stock_count: 4,
      sold_count: 0,
      description: 'NULL',
    },
  },
  {
    id: '5',
    img: '/img/relay/5.jpg',
    product: {
      id: 10407,
      name: '드레텍 스톱워치',
      coupang_product_id: 6138741370,
      category: '데스크정리소품',
      price: 8200,
      base_price: 10900,
      discount_rate: 24,
      thumbnail_src:
        'https://image8.coupangcdn.com/image/vendor_inventory/f9fd/3d73806fae8d9ca54059418e8da478934fed45cf1fde7e01dae81dad5144.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description: '',
    },
  },
  {
    id: '6',
    img: '/img/relay/6.jpg',
    product: {
      id: 10408,
      name: '크록스 바야 라인드 클로그 화이트 205969-11H',
      coupang_product_id: 16356581875,
      category: '실내화',
      price: 31470,
      base_price: 109000,
      discount_rate: 71,
      thumbnail_src:
        'https://image10.coupangcdn.com/image/vendor_inventory/cfa7/53030c527fd7f6183efa22d855e93c374f66948e17e054aa6bbbdd2ad1ca.jpg',
      created_at: '',
      stock_count: 7,
      sold_count: 0,
      description: 'NULL',
    },
  },
  {
    id: '7',
    img: '/img/relay/7.jpg',
    product: {
      id: 10409,
      name: '소니 블루투스 헤드셋 WH-CH520',
      coupang_product_id: 7154098029,
      category: '블루투스 헤드폰',
      price: 73000,
      base_price: 84000,
      discount_rate: 17,
      thumbnail_src:
        'https://image6.coupangcdn.com/image/retail/images/4275480964807189-d87f7e0a-5dbf-4df1-833a-9f6de2174704.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description:
        '유무선 여부: 무선, 내장마이크 탑재여부: 내장마이크, 연결방식: 멀티단자, 색상계열: 화이트계열, 헤드폰/헤드셋 유닛형태: 밀폐형',
    },
  },
  {
    id: '8',
    img: '/img/relay/8.jpg',
    product: {
      id: 10409,
      name: '소니 블루투스 헤드셋 WH-CH520',
      coupang_product_id: 7154098029,
      category: '블루투스 헤드폰',
      price: 73000,
      base_price: 84000,
      discount_rate: 17,
      thumbnail_src:
        'https://image6.coupangcdn.com/image/retail/images/4275480964807189-d87f7e0a-5dbf-4df1-833a-9f6de2174704.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description:
        '유무선 여부: 무선, 내장마이크 탑재여부: 내장마이크, 연결방식: 멀티단자, 색상계열: 화이트계열, 헤드폰/헤드셋 유닛형태: 밀폐형',
    },
  },
]
