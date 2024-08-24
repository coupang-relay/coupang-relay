import Image from 'next/image'
import styled from 'styled-components'

export const ProductListItem: React.FC = () => {
  return (
    <Container>
      <ProductImage alt="" width={512} height={512} src="/assets/product-1.png" />

      <Info>
        <Title>머지 더 퍼스트 브로우 펜슬 2개</Title>
        <OriginalPrice>
          50% <span className="line-through">24,800원</span>
        </OriginalPrice>
        <FinalPrice>12,400원</FinalPrice>
        <DeliveryTime>내일(토) 도착 보장</DeliveryTime>
        <Metadata>무료배송 ⋅ 무료반품</Metadata>
      </Info>
    </Container>
  )
}

const Container = styled.li`
  border-top: 1px solid #dfe3e6;
  padding: 16px;
  display: flex;
`

const ProductImage = styled(Image)`
  width: 148px;
  height: 148px;
  object-fit: contain;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`

const OriginalPrice = styled.span`
  color: #7b858e;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
  text-decoration-line: strikethrough;
`
const FinalPrice = styled.span`
  color: #c51905;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
`
const DeliveryTime = styled.span`
  color: #178017;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
`
const Metadata = styled.span`
  color: #7b858e;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
`
