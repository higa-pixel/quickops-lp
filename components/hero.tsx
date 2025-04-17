import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            その業務、3日後には
            <span className="block text-blue-600">『仕組みで回る』</span>
            ように
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            QuickOpsは、AIとノーコードで日常業務を最短3営業日で自動化するサービスです。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button size="lg" className="px-8">
              無料相談を予約する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              資料をダウンロードする
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              導入実績 100社以上 ・ 平均業務時間削減率 68%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
