'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type ReviewCardProps = {
  id: number
}
export const ReviewCard: React.FC<ReviewCardProps> = ({ id }) => {
  return (
    <Link
      href={`/relay/${id + 1}`}
      key={id}
      className="w-[180px] min-h-[269px] max-h-[269px] overflow-hidden mx-1 snap-center rounded-[8px]"
    >
      <Container>
        <Image
          src={`/img/relay/${id + 1}.jpeg`}
          alt="cat"
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"
          width={180}
          height={320}
        />

        <div className="flex flex-col absolute left-4 bottom-4">
          <RealtimeMetrics>74명이 보는 중</RealtimeMetrics>
          <Views>조회수 2,389</Views>
        </div>
      </Container>
    </Link>
  )
}

const Container = styled.li`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(214, 214, 214, 0.5);
  border-radius: 8px;
  overflow: hidden;
`

const RealtimeMetrics = styled.span`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Views = styled.h3`
  margin-top: 4px;

  color: #fff;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
