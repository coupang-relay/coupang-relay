import { ArrowLeft, ChevronRight, Home, Play, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Component({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <ArrowLeft className="w-6 h-6" />
        <h1 className="ml-4 text-lg font-semibold">쿠팡릴레이</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          {/* Main Product Image */}
          <img src={`/img/relay/${params.id}.jpeg`} alt="Lipstick" className="w-full h-auto" />

          {/* Overlays */}
          <div className="absolute top-4 right-4 bg-white rounded-full p-1">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">두통 째 !!!!!</div>
        </div>

        {/* Product Details */}
        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold">💄 3CE - 워터 블러 틴트</h2>
          <p className="text-sm text-gray-600">#핑크구아바</p>
          <div className="mt-2">
            <span className="mr-2">발색력 ⭐⭐⭐⭐</span>
            <span className="mr-2">지속력 ⭐⭐</span>
            <span>휴대성 ⭐⭐⭐</span>
          </div>
          <div className="mt-2 text-sm">
            <p>퍼스널 컬러 👉 봄웜라이트</p>
            <p>개인적으로 잘 맞았음 요즘 내 최애 🥰❤️</p>
            <p>여름 친구들도 조아해서 막 빨개서 쏨 ㅋㅋㅋ</p>
          </div>
        </div>
        <Card className="m-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={`/img/relay/${params.id}.jpeg`} alt="Product" className="w-12 h-12 object-cover" />
                <div>
                  <h3 className="font-semibold">머지 더 퍼스트 브로우 펜슬 2개</h3>
                  <p className="text-sm text-red-600">12,400원</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-around py-2 bg-white border-t border-gray-200">
        <Button variant="ghost" size="icon">
          <Home className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Play className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
