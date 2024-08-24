'use client'
import { useState, useRef, useEffect, TouchEvent } from 'react'
import styled from 'styled-components'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`

const ScrollItem = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

export const RelayView: React.FC<{ id: string }> = ({ id }) => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollTop
        const viewportHeight = window.innerHeight
        const snapIndex = Math.round(scrollPosition / viewportHeight)
        setCurrentIndex(snapIndex)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe up
      setCurrentIndex((prev) => Math.min(prev + 1, 9))
    }

    if (touchStart - touchEnd < -50) {
      // Swipe down
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: currentIndex * window.innerHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <ScrollContainer
      ref={scrollContainerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <ScrollItem key={index}>
          <div className="relative w-full h-screen bg-black">
            <div className="items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoading ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
              >
                <StyledImage
                  src={`/img/relay/${index + 1}.jpeg`}
                  onLoad={() => setImageLoading(false)}
                  alt={`product-${index + 1}`}
                  className="rounded-lg"
                  layout="fill"
                  quality={100}
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 ml-4 mb-20 rounded-[8px] mr-[12px] flex items-center justify-between gap-3 p-[10px]"
                style={{ background: `linear-gradient(0deg, #FFF 0%, #E4E4E4 100%)` }}
              >
                <Image
                  src={`/img/relay/${index + 1}.jpeg`}
                  alt="Product"
                  className="w-[74px] h-[74px] object-cover rounded-sm"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col flex-1">
                  <ProductName>머지 더 퍼스트 브로우 펜슬 2개</ProductName>
                  <OriginalPrice>
                    50% <span className="line-through">24,800원</span>
                  </OriginalPrice>
                  <div className="mt-1 flex items-center gap-2">
                    <FinalPrice>12,400원</FinalPrice>
                    <Image
                      alt="로켓와우"
                      src="/assets/badges/rocket-wow.png"
                      className="h-[16px] w-[64px]"
                      width={126 * 2}
                      height={32 * 2}
                    />
                  </div>
                </div>
                <ChevronRight size={24} className="text-gray-400" />
              </motion.div>
            </div>
          </div>
        </ScrollItem>
      ))}
    </ScrollContainer>
  )
}

const ProductName = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
`

const OriginalPrice = styled.span`
  margin-top: 8px;
  color: #a1a1a1;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
`

const FinalPrice = styled.span`
  color: #c51905;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
`

export default RelayView

const StyledImage = styled(Image)`
  /* object-fit: contain;

  @media (max-width: 500px) {
    object-fit: cover;
  } */

  object-fit: cover;
`
