'use client'

import React from 'react'
import styled from 'styled-components'

export const ReviewCard: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col absolute left-4 bottom-4">
        <RealtimeMetrics>74명이 보는 중</RealtimeMetrics>
        <Views>조회수 2,389</Views>
      </div>
    </Container>
  )
}

const Container = styled.li`
  width: 152px;
  height: 269px;
  position: relative;
  background: rgba(214, 214, 214, 0.5);
  border-radius: 8px;
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
