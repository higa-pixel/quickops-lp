"use client"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center px-2 sm:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl" style={{ wordBreak: 'keep-all', lineHeight: '1.2' }}>
            <span className="text-blue-600">AI</span>で業務を<span className="text-blue-600">"自動化"</span>
            <br />
            “月30時間”を取り戻す。
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            QuickOpsはAI×ノーコードで1業務から始め、成果を確認しながら拡張できます。
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium">
                無料相談を予約する
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/contact/thanks" className="w-full sm:w-auto mt-4 sm:mt-0">
              <Button size="lg" variant="outline" className="w-full px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium">
                資料をダウンロードする
              </Button>
            </Link>
          </div>
          
          {/* 電話番号の表示 */}
          <div className="mt-6 sm:mt-8">
            <a href="tel:050-1725-1867" className="inline-flex items-center justify-center">
              <div className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors">
                <Phone className="h-8 w-8 mr-2" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">050-1725-1867</span>
              </div>
            </a>
            <p className="mt-2 text-sm text-gray-500">お電話でのお問い合わせも受け付けております</p>
          </div>
          
          {/*
            <div className="mt-8 sm:mt-12 flex items-center justify-center">
              <div className="rounded-full bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-700">
                導入実績 100社以上 ・ 平均業務時間削減率 68%
              </div>
            </div>
          */}
        </div>
      </div>
    </section>
  )
}