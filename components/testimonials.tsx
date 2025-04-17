import Image from "next/image"

const testimonials = [
  {
    content:
      "QuickOpsのおかげで、毎日2時間かかっていた受注処理が完全に自動化されました。スタッフは本来の業務に集中できるようになり、顧客満足度も向上しています。",
    author: "田中 健太",
    role: "営業部長 / 株式会社テックソリューション",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "導入前は懐疑的でしたが、実際に使ってみると想像以上の効果がありました。特に問い合わせ対応の自動化は、対応時間を80%削減し、顧客からの評価も上がりました。",
    author: "佐藤 美咲",
    role: "カスタマーサポート責任者 / ABCサービス",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "小規模企業の私たちにとって、ITへの投資は慎重にならざるを得ませんでした。しかしQuickOpsは短期間で投資回収ができ、今では社内の様々な業務に展開しています。",
    author: "鈴木 大輔",
    role: "代表取締役 / クリエイティブワークス",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">お客様の声</h2>
          <p className="mt-4 text-lg text-gray-600">QuickOpsを導入したお客様からいただいた評価</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-gray-600">"{testimonial.content}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
