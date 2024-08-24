'use client'

import styled from 'styled-components'
import { useMemo } from 'react'
import { RELAYS } from '@/app/constants/relays'
import RelayView from '@/components/RelayView'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  const relays = useMemo(() => {
    if (params.id === 'random') {
      return RELAYS.sort(() => Math.random() - 0.5)
    }
    const relayIndex = RELAYS.findIndex((v) => v.id === params.id)
    if (relayIndex === -1) {
      return []
    }
    return [...RELAYS.slice(relayIndex), ...RELAYS.slice(0, relayIndex)]
  }, [params.id])

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-36 z-10">
        <h1 className="absolute text-xl font-bold text-center z-10 p-4 w-full text-black grid grid-cols-3 items-center">
          <Button onClick={() => router.back()} className="bg-transparent hover:bg-transparent" size="icon">
            <ChevronLeft strokeWidth={2} />
          </Button>
          <Title>쿠팡 릴레이</Title>
        </h1>
      </div>
      <RelayView relays={relays} />
    </>
  )
}

const Title = styled.span`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
