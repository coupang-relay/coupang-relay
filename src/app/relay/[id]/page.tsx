"use client"

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
        <Card className="absolute bottom-0 left-0 right-0 mx-4 mb-20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image src={`/img/relay/${params.id}.jpeg`} alt="Product" className="w-12 h-12 object-cover rounded-sm w-12 h-12" width={50} height={50} />
                <div>
                  <h3 className="font-semibold">머지 더 퍼스트 브로우 펜슬 2개</h3>
                  <p className="text-sm text-red-600">12,400원</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
