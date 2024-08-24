'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className="absolute inset-0 h-36 z-10">
        <h1 className="absolute text-xl font-bold text-center z-10 p-2 w-full text-black grid grid-cols-3">
          <Button onClick={() => router.back()} className="text-black bg-transparent hover:bg-transparent" size="icon">
            <ArrowLeft />
          </Button>
          <span className="flex items-center justify-center">대시보드</span>
        </h1>
      </div>
      <Image
        src="/img/dashboard.png"
        alt="dashboard"
        className="flex mx-auto rounded-lg object-cover"
        // layout="fill"
        quality={100}
        width={390 * 2}
        height={844 * 2}
        style={{ width: 390, height: 844 }}
      />
    </>
  )
}
