'use client'

import styled from 'styled-components'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Title>쿠팡 릴레이</Title>
      <div className="flex items-center">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </main>
  )
}

const Title = styled.h2`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ReviewCard: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col absolute left-4 bottom-4">
        <RealtimeMetrics>74명이 보는 중</RealtimeMetrics>
        <Views>조회수 2,389</Views>
      </div>
    </div>
  )
}

const RealtimeMetrics = styled.span`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Views = styled.h3`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
