import styled from 'styled-components'
import Image from 'next/image'

export const RelayTitle: React.FC = () => {
  return (
    <div className="flex items-center px-4 mb-1 mt-1 gap-1 w-full">
      <Icon alt="" src="/assets/relay-logo.png" width={256} height={256} style={{ width: 26, height: 26 }} />
      <Title>쿠팡릴레이</Title>
    </div>
  )
}

const Icon = styled(Image)`
  width: 26px;
  height: 26px;
`
const Title = styled.h2`
  width: fit-content;

  color: #009bff;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
`
