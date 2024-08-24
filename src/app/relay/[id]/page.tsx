'use client'

import styled from 'styled-components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <div className="relative w-full h-screen">
      <div className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-36 z-10">
          <h1 className="absolute text-2xl font-bold text-center z-10 p-10 w-full text-white grid grid-cols-3">
            <Button onClick={() => router.back()} className="bg-transparent hover:bg-transparent" size="icon">
              <ArrowLeft />
            </Button>
            <span className="text-white">Product {params.id}</span>
          </h1>
        </div>
        <Image
          src={`/img/relay/${params.id}.jpeg`}
          alt="Placeholder image"
          className="rounded-lg object-cover"
          layout="fill"
        />

        <Card
          className="absolute bottom-0 left-0 right-0 mx-4 mb-20"
          style={{ background: `linear-gradient(0deg, #FFF 0%, #E4E4E4 100%)` }}
        >
          <CardContent className="p-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={`/img/relay/${params.id}.jpeg`}
                  alt="Product"
                  className="w-[74px] h-[74px] object-cover rounded-sm"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <ProductName>머지 더 퍼스트 브로우 펜슬 2개</ProductName>
                  <OriginalPrice>
                    50% <span className="line-through">24,800원</span>
                  </OriginalPrice>
                  <FinalPrice>12,400원</FinalPrice>
                </div>
              </div>
              <ChevronRight size={24} className="text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const ProductName = styled.span`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`

const OriginalPrice = styled.span`
  color: #a1a1a1;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
`
const FinalPrice = styled.span`
  color: #c51905;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
`
