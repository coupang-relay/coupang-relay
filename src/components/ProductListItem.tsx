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

        <Footer className="flex items-center gap-[0.5]">
          <div className="flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <ReviewCount>(999+)</ReviewCount>
        </Footer>
      </Info>
    </Container>
  )
}

const Container = styled.li`
  border-top: 1px solid #dfe3e6;
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
`

const ProductImage = styled(Image)`
  width: 148px;
  height: 148px;
  object-fit: contain;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Title = styled.h3`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`

const OriginalPrice = styled.span`
  margin-top: 12px;

  color: #7b858e;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
  text-decoration-line: strikethrough;
  line-height: 100%;
`
const FinalPrice = styled.span`
  margin-top: 6px;

  color: #c51905;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
`
const DeliveryTime = styled.span`
  margin-top: 8px;

  color: #178017;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
`
const Metadata = styled.span`
  margin-top: 8px;

  color: #7b858e;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
`
const Footer = styled.div`
  margin-top: 12px;
`
const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_8_581)">
      <path
        d="M7.93359 2.43045L8.69713 4.41849C8.83707 4.78285 9.17622 5.0325 9.5657 5.05785L11.7264 5.19849C12.5955 5.25505 12.9819 6.31834 12.352 6.9197L10.6182 8.57481C10.3567 8.82449 10.2503 9.19591 10.34 9.54619L10.8798 11.6543C11.101 12.5183 10.1661 13.2178 9.39965 12.7617L7.51148 11.638C7.19634 11.4505 6.80383 11.4505 6.48869 11.638L4.60032 12.7617C3.83386 13.2178 2.89895 12.5184 3.1202 11.6543L3.66001 9.54619C3.7497 9.19591 3.64332 8.82449 3.38177 8.57481L1.648 6.9197C1.01806 6.31834 1.4045 5.25505 2.27355 5.19849L4.43435 5.05784C4.82382 5.03249 5.16295 4.78287 5.3029 4.41853L6.06657 2.43041C6.39509 1.57515 7.60511 1.57518 7.93359 2.43045Z"
        fill="#F5AF01"
      />
    </g>
    <defs>
      <clipPath id="clip0_8_581">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const ReviewCount = styled.span`
  color: #7b858e;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`