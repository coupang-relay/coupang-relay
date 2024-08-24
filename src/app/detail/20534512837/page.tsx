/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { type Product } from '../../api/db'
import { RelayCard } from '@/components/RelayCard'
import { RelayTitle } from '@/components/RelayTitle'

const product: Product = {
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
}

const IMGS = {
  option: '/assets/20534512837-option.png',
  detail: '/assets/20534512837-detail.png',
  reviews: '/assets/20534512837-reviews.png',
}

export default function Page() {
  const [isImageLoading, setImageLoading] = useState<boolean>(false)

  const productThumbnailSrc = !product
    ? null
    : product.thumbnail_src.startsWith('https://')
      ? product.thumbnail_src
      : `https://${product.thumbnail_src}`
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        className="w-[100%] aspect-square relative"
      >
        {productThumbnailSrc ? (
          <img
            className="w-[100%] h-[100%] absolute top-0 left-0 right-0 bottom-0 object-cover"
            src={productThumbnailSrc}
            alt=""
            width={50}
            height={50}
            onLoad={() => setImageLoading(false)}
          />
        ) : null}
        <div
          className="w-[100%] h-[100%] absolute top-0 left-0 right-0 bottom-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 80.13%, rgba(0, 0, 0, 0.20) 117.82%)' }}
        />
      </motion.div>{' '}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-[24px]">
        <Category>{product?.category}</Category>
        <ProductName>{product?.name}</ProductName>

        <img className="mt-[16px]" src={IMGS.option} alt="옵션" width={390} height={390} />

        <OriginalPrice>
          <span className="text-[#212B36]">{product?.discount_rate?.toLocaleString()}%</span>{' '}
          <span className="line-through">{product?.base_price?.toLocaleString()}원</span>
        </OriginalPrice>
        <div className="mt-1 flex items-center gap-2">
          <FinalPrice>{product?.price?.toLocaleString()}원</FinalPrice>
          <Image
            alt="로켓와우"
            src="/assets/badges/rocket-wow.png"
            className="h-[20px] w-[80px]"
            width={126 * 2}
            height={32 * 2}
          />
        </div>
      </div>
      <div
        className="flex flex-col"
        style={{
          borderTop: `1px solid #dfe3e6`,
          paddingTop: 20,
          marginTop: 20,
        }}
      >
        <RelayTitle />
        <div className="relative overflow-hidden">
          <ul className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <RelayCard key={id} id={id} />
            ))}
          </ul>
        </div>
      </div>
      {/* images */}
      <ImageList>
        <Image src={IMGS.detail} alt="상세정보" width={390} height={661} />
        <Image src={IMGS.reviews} alt="리뷰" width={390} height={588} />
      </ImageList>
    </div>
  )
}

const Category = styled.span`
  color: #346aff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`
const ProductName = styled.span`
  margin-top: 16px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
`

const OriginalPrice = styled.span`
  margin-top: 24px;
  color: #768695;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
`
const FinalPrice = styled.span`
  color: #c51905;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`

const ImageList = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  img {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
  }
`
