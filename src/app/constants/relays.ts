import { type Product } from '../api/db'

export type RelayItem =
  | {
      type: 'product'
      id: string
      img: string
      product: Product
    }
  | {
      type: 'eats'
      id: string
      img: string
      product: {
        id: '#'
        name: string
        desc: string
        price: number
        thumbnail_src: string
      }
    }

export const RELAYS: RelayItem[] = [
  {
    type: 'product',
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
    type: 'product',
    id: '2',
    img: '/img/relay/2.jpg',
    product: {
      id: 20164535083,
      name: '햇반 컵반 스팸 마요 덮밥 5개, 219g, 5개',
      coupang_product_id: 20164535083,
      category: '덮밥/비빔밥',
      price: 10089,
      base_price: 13620,
      discount_rate: 5,
      thumbnail_src:
        'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/49e3/b6db534f4dc2d370d379788ac955cceb4a1c86606d0477124f1691d3e1ef.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description: '',
    },
  },
  {
    type: 'product',
    id: '3',
    img: '/img/relay/3.jpg',
    product: {
      id: 5033261049,
      name: 'Apple 2020 맥북 에어 13스페이스 그레이 · M1 · 256GB · 8GB · A2337',
      coupang_product_id: 5033261049,
      category: 'Apple',
      price: 1056400,
      base_price: 1112000,
      discount_rate: 5,
      thumbnail_src:
        'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/397296000467275-5a83a375-06a6-4c00-9e16-ffd2687b23c8.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description: '',
    },
  },
  {
    type: 'product',
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
    type: 'product',
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
    type: 'product',
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
    type: 'product',
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
    type: 'product',
    id: '8',
    img: '/img/relay/8.jpg',
    product: {
      id: 21318606840,
      name: '웅진 맑게우려낸 누룽지차, 500ml, 20개',
      coupang_product_id: 21318606840,
      category: '음료/누룽지차',
      price: 13720,
      base_price: 28600,
      discount_rate: 52,
      thumbnail_src:
        'https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1601554944460728-59590ffb-f939-4442-b2d9-328ed9b62ae8.jpg',
      created_at: '',
      stock_count: 0,
      sold_count: 0,
      description: '원산지: 상품 상세설명 참조',
    },
  },
  {
    type: 'eats',
    id: 'eats-1',
    img: '/img/relay/eats-1.jpg',
    product: {
      id: '#',
      name: 'BHC 치킨 커리퀸 닭다리',
      desc: '23분 만에 로켓 배달!',
      price: 28000,
      thumbnail_src: 'https://www.chickenrank.com/storage/chickens/WwvXsLZTYl7F0zHPxO3bs4G4xlwpV5aaLAh5hUzi.png',
    },
  },
  {
    type: 'eats',
    id: 'eats-2',
    img: '/img/relay/eats-2.jpg',
    product: {
      id: '#',
      name: '배스킨라빈스 패밀리 아이스크림 [5가지 맛]',
      desc: '48분 만에 로켓 배달!',
      price: 24000,
      thumbnail_src: 'https://sitem.ssgcdn.com/86/69/80/item/1000556806986_i1_750.jpg',
    },
  },
  {
    type: 'eats',
    id: 'eats-3',
    img: '/img/relay/eats-3.jpg',
    product: {
      id: '#',
      name: '동대문엽기떡볶이 엽기메뉴',
      desc: '31분 만에 로켓 배달!',
      price: 14000,
      thumbnail_src: 'https://www.yupdduk.com/bod/config/menu/%EC%97%BD%EA%B8%B0%EB%A9%94%EB%89%B4_6_1_1_1_1_1.png',
    },
  },
  {
    type: 'eats',
    id: 'eats-4',
    img: '/img/relay/eats-4.jpg',
    product: {
      id: '#',
      name: '카페 생크림와플 (초코시럽)',
      desc: '12분 만에 로켓 배달!',
      price: 6100,
      thumbnail_src: 'https://ynpoint.com/web/product/big/202302/18f6e97ea5a4d2b061ac833f2174be25.jpg',
    },
  },
]
