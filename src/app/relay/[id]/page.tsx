'use client'

import { useMemo } from 'react'
import { RELAYS } from '@/app/constants/relays'
import RelayView from '@/components/RelayView'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  const relays = useMemo(() => {
    const relayIndex = RELAYS.findIndex((v) => v.id === params.id)
    if (relayIndex === -1) {
      return []
    }
    return [...RELAYS.slice(relayIndex), ...RELAYS.slice(0, relayIndex)]
  }, [params.id])

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-36 z-10">
        <h1 className="absolute text-2xl font-bold text-center z-10 p-10 w-full text-white grid grid-cols-3">
          <Button onClick={() => router.back()} className="bg-transparent hover:bg-transparent" size="icon">
            <ArrowLeft />
          </Button>
          <span className="text-white">쿠팡 릴레이</span>
        </h1>
      </div>
      <RelayView relays={relays} />
    </>
  )
}
