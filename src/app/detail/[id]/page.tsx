/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { type Product } from '../../api/db'

export default function Page({ params }: { params: { id: string } }) {
  const [isImageLoading, setImageLoading] = useState<boolean>(true)

  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/detail/${params.id}`)
      const response = await data.json()
      console.log(response)
      setProduct(response)
    }

    fetchData()
  }, [params.id])

  const productThumbnailSrc = !product
    ? null
    : product.thumbnail_src.startsWith('https://')
      ? product.thumbnail_src
      : `https://${product.thumbnail_src}`

  return (
    <div className="relative w-full h-screen">
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
      </motion.div>

      <div className="flex flex-col flex-1 px-4 pt-3 pb-[64px]">
        <Category>{product?.category}</Category>
        <ProductName>{product?.name}</ProductName>
        <OriginalPrice>
          <span className="text-[#212B36]">50%</span> <span className="line-through">24,800원</span>
        </OriginalPrice>
        <div className="mt-1 flex items-center gap-2">
          <FinalPrice>12,400원</FinalPrice>
          <Image
            alt="로켓와우"
            src="/assets/badges/rocket-wow.png"
            className="h-[20px] w-[80px]"
            width={126 * 2}
            height={32 * 2}
          />
        </div>
      </div>
    </div>
  )
}

const Category = styled.span`
  color: #346aff;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`
const ProductName = styled.span`
  margin-top: 16px;

  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
`

const OriginalPrice = styled.span`
  margin-top: 24px;

  color: #768695;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
`
const FinalPrice = styled.span`
  color: #c51905;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`
