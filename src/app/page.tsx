import { Home, Menu, Rocket, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { trpc } from '../index'

export default async function Page() {
  const totalSlides = 7

  const user = await trpc.getProducts.query({
    limit: 10,
    offset: 0,
  })

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
          coupang
        </h1>
        <div className="w-8 h-8 bg-purple-600 rounded-full" />
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Reels section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold px-4 mb-2">100% 만족하는 화장품</h2>
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {[...Array(3)].map((_, i) => (
                <Link href={`/relay/${i + 1}`} key={i} className="flex-shrink-0 w-[180px] mx-2 snap-center">
                  <div className="p-0 h-[320px] relative">
                    <Image
                      src={`/img/relay/${i + 1}.jpeg`}
                      alt="cat"
                      className="w-full h-full object-cover"
                      width={180}
                      height={320}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                      <p className="text-white text-sm">Product Name</p>
                      <p className="text-white text-xs">₩2,389</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel ad banner */}
        <section className="relative mb-4 px-4">
          <div className="overflow-hidden rounded-lg">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {[...Array(totalSlides)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-full snap-center">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">잔뜩 담아도 안 무거워!</h3>
                    <p className="text-sm">국민템 최대 50% 할인</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(totalSlides)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-muted" />
            ))}
          </div>
        </section>

        {/* Service icons */}
        <section className="grid grid-cols-4 gap-4 px-4 mb-4">
          {['로켓배송', '로켓프레시', '로켓직구', '쿠팡라이브'].map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center ${['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][i]}`}
              >
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-center">{service}</span>
              <span className="text-xs text-muted-foreground">바로가기</span>
            </div>
          ))}
        </section>
      </main>

      {}

      {/* Navigation bar */}
      <nav className="flex justify-around items-center p-4 border-t">
        <Link href="/menu">
          <Menu className="h-6 w-6" />
        </Link>
        <Link href="/search">
          <Search className="h-6 w-6" />
        </Link>
        <Link href="/">
          <Home className="h-6 w-6" />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="h-6 w-6" />
        </Link>
        <Link href="/profile">
          <User className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  )
}
