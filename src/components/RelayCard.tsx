'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type RelayCardProps = {
  id: number
}
export const RelayCard: React.FC<RelayCardProps> = ({ id }) => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true)
  return (
    <Link
      href={`/relay/${id}`}
      key={id}
      className="min-w-[180px] max-w-[180px] min-h-[270px] max-h-[270px] overflow-hidden mx-1 snap-center rounded-[8px]"
    >
      <Container whileHover={{ y: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoading ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <Image
            alt=""
            src={`/img/relay/${id}.jpeg`}
            onLoad={() => setImageLoading(false)}
            className="w-full h-[270px] object-cover absolute top-0 left-0 right-0 bottom-0"
            width={180}
            height={270}
            quality={90}
          />
        </motion.div>
        <div className="flex flex-col absolute left-4 bottom-4">
          <RealtimeMetrics>74명이 보는 중</RealtimeMetrics>
          <Views>조회수 2,389</Views>
        </div>
      </Container>
    </Link>
  )
}

const Container = styled(motion.li)`
  width: 100%;
  aspect-ratio: 9/16;
  position: relative;
  background: rgba(214, 214, 214, 0.5);
  border-radius: 8px;
  overflow: hidden;
`

const RealtimeMetrics = styled.span`
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Views = styled.h3`
  margin-top: 4px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
