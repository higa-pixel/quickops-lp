import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "スターター",
    price: "¥10,000",
    description: "月1回MTG＋チャット相談＋今だけ1業務自動化つき",
    features: [
      "月1回のオンラインミーティング",
      "チャットでの相談サポート",
      "1つの業務フローの自動化",
      "基本的なAI機能",
      "メールサポート",
    ],
    cta: "無料相談を予約",
    popular: false,
  },
  {
    name: "スタンダード",
    price: "¥97,000",
    description: "月1回MTG＋作業10時間",
    features: [
      "月1回のオンラインミーティング",
      "10時間の作業時間",
      "3つまでの業務フローの自動化",
      "高度なAI機能",
      "優先サポート（平日12時間）",
      "月次レポート",
    ],
    cta: "無料相談を予約",
    popular: true,
  },
  {
    name: "プレミア",
    price: "¥198,000",
    description: "月2回MTG＋作業20時間＋社内勉強会",
    features: [
      "月2回のオンラインミーティング",
      "20時間の作業時間",
      "無制限の業務フロー自動化",
      "高度なAI機能",
      "優先サポート（24時間）",
      "社内向け勉強会の実施",
      "経営層向けレポート",
    ],
    cta: "無料相談を予約",
    popular: false,
  },
  {
    name: "カスタム",
    price: "応相談",
    description: "生成AI・チャットボットなど",
    features: [
      "カスタムAI開発",
      "専任コンサルタント",
      "オーダーメイドソリューション",
      "24時間サポート",
      "定期的な改善ワークショップ",
      "経営層向けレポート",
    ],
    cta: "詳細を問い合わせ",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">シンプルな料金体系</h2>
          <p className="mt-4 text-lg text-gray-600">ビジネスの規模や自動化したい業務に合わせて選べる料金プラン</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden ${
                plan.popular ? "border-blue-200 shadow-md" : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-7 w-36 rotate-45 bg-blue-600 py-1 text-center text-sm font-medium text-white">
                  人気
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                </div>
                <CardDescription className="mt-1">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className={`h-5 w-5 ${plan.popular ? "text-blue-600" : "text-gray-500"}`} />
                      </div>
                      <p className="ml-3 text-sm text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            すべてのプランには初期設定費用が含まれています。カスタムプランについてはお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  )
}
