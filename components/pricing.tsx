"use client"

import Link from "next/link"

import { Check, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "スタータープラン",
    price: "¥1万円",
    description: "「何から始めるか分からない」企業向け",
    features: [
      "月1回の面談 または 社内勉強会",
      "チャット・メール相談",
      "まず相談してみたい方にぴったり",
    ],
    specialOffer: "1業務の自動化付き",
    cta: "無料相談を予約",
    popular: false,
  },
  {
    name: "スタンダードプラン",
    price: "¥5万円",
    description: "仕組み化を継続したい中小企業向け",
    features: [
      "月2回の面談 または 社内勉強会",
      "チャット・メール相談",
      "毎月2業務の自動化（ノーコード中心）",
      "社内に定着する改善サイクルを実現",
    ],
    cta: "無料相談を予約",
    popular: true,
  },
  {
    name: "カスタム",
    price: "応相談",
    description: "AI応用導入や全社DXを進めたい企業向け",
    features: [
      "複合的な業務プロセス自動化",
      "ChatGPT・生成AIの応用構築",
      "経営層や社員向けのAI・ITリテラシー研修",
      "社内ポータル・ナレッジ基盤の開発支援",
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden flex flex-col ${
                plan.popular ? "border-blue-200 shadow-md" : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-7 w-36 -rotate-45 bg-blue-600 py-1 text-center text-sm font-medium text-white">
                  おすすめ
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">
                  {plan.price}／月
                  <span className="text-sm">（税込）</span>
                  </span>
                </div>
                <CardDescription className="mt-1">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
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
                
                {plan.specialOffer && (
                  <div className="mt-5 mb-5 p-3 bg-blue-50 rounded-md border border-blue-100">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-blue-600">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <p className="ml-2 text-sm font-bold text-blue-600">
                        ✅【期間限定特典】{plan.specialOffer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={plan.name === "カスタム" ? "/contact?plan=custom" : "/contact"} className="w-full">
                  <span className={`inline-block w-full text-center py-2 px-4 rounded-md ${
                    plan.popular 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : plan.name === "カスタム"
                        ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}>
                    {plan.cta}
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* <div className="mt-12 text-center">
          <p className="text-gray-600">
            すべてのプランには初期設定費用が含まれています。カスタムプランについてはお問い合わせください。
          </p>
        </div> */}
      </div>
    </section>
  )
}