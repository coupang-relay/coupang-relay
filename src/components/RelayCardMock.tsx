'use client'

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const RelayCardMock: React.FC = () => {
  return (
    <div className="min-w-[180px] max-w-[180px] min-h-[270px] max-h-[270px] overflow-hidden mx-1 snap-center rounded-[8px]">
      <Container />
    </div>
  )
}

const Container = styled(motion.li)`
  width: 100%;
  aspect-ratio: 2/3;
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
  font-weight: 700;
`

const FireIcon: React.FC = () => (
  <svg
    className="inline-block"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.27805 0.468999C4.98979 0.91511 4.47848 1.73184 3.9603 2.64465C3.77843 2.41473 3.61371 2.21569 3.48331 2.0647C3.34261 1.89998 3.0921 1.90685 2.95827 2.075C2.46755 2.68926 1.42434 4.16485 1.27335 5.6679C1.05029 7.8813 2.45039 9.29513 4.41328 9.64515C4.6432 9.70692 4.92802 9.6829 5.20255 9.6829C7.06592 9.6829 9.09401 8.44752 8.84007 5.94587C8.55868 3.16968 6.63697 1.29945 5.81681 0.420956C5.66582 0.256238 5.39815 0.283691 5.27805 0.47243V0.468999Z"
      fill="#EF4D28"
    />
    <path
      d="M6.67807 6.86918C6.67807 7.99819 5.84418 8.62617 4.97255 8.62617C4.1524 8.62617 3.3494 7.92612 3.39744 6.86918C3.45578 5.65096 4.39604 4.68667 4.84215 4.32635C4.97598 4.21654 5.16816 4.21997 5.29513 4.33322C5.73437 4.71756 6.67464 5.67155 6.67464 6.86918H6.67807Z"
      fill="#FBA543"
    />
  </svg>
)
