"use client"

import Link from "next/link"
import { Check, BookOpen, Settings2, Hammer, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// ▼ プラン定義を丸ごと更新
const plans = [
  // 1) スターター ─ 基礎レクチャー＋相談窓口
  {
    name: "スタータープラン",
    price: "¥1万",
    period: "／月",
    description: "AI・DXを“まず知る”ための入門プラン",
    features: [
      "月1回60分AI/DXレクチャー or 初歩的質問も何でも相談",
      "チャット・メール質問窓口",
      "自走ガイド、他社事例等の提供",
    ],
    icon: BookOpen,               // ←下でアイコン表示に使う
    cta: "無料相談を予約",
    popular: false,
  },

  // 2) スタンダード ─ 設定伴走で即効改善
  {
    name: "スタンダードプラン",
    price: "¥5万",
    period: "／月",
    description: "設定サポート付きで自社で継続改善したい企業向け",
    features: [
      "月1回 2h（又は月2回　1h） 面談 or 社内勉強会",
      "画面共有で設定サポート & 問題切り分け",
      "作成ワークフローの月次レビュー＋改善提案ー",
    ],
    icon: Settings2,
    cta: "無料相談を予約",
    popular: true,
  },

  // 3) カスタム ─ 専用システム開発を丸投げ
  {
    name: "カスタムプラン",
    price: "応相談（¥50万程度〜）",
    period: "", // 一括／分割可
    description: "要件定義～開発まで QuickOps が代行",
    features: [
      "専任PMが要件定義・設計・開発/設定",
      "分割払い・成功報酬なども可。初期費用抑制",
      "月100h削減なら 3〜6か月で投資回収",
    ],
    icon: Hammer,
    cta: "詳細を問い合わせ",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">シンプルな料金体系</h2>
          <p className="mt-4 text-lg text-gray-600">
            「知る → 作る → 任せる」の3ステップで選べるプラン
          </p>
          <div className="mt-2 text-sm text-blue-600 font-medium flex items-center justify-center">
            <Info className="h-4 w-4 mr-1" />
            <span>β版につき今後料金体系は変更となる可能性があります</span>
          </div>
        </div>

        {/* プランカード */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden flex flex-col ${
                plan.popular
                  ? "border-blue-200 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* “おすすめ”リボン */}
              {plan.popular && (
                <div className="absolute -right-12 top-7 w-36 -rotate-45 bg-blue-600 py-1 text-center text-sm font-medium text-white">
                  おすすめ
                </div>
              )}

              {/* ヘッダー */}
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <plan.icon className="h-6 w-6 text-blue-600" />
                  {plan.name}
                </CardTitle>

                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">
                    {plan.price}
                    {plan.period}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-sm text-gray-500">（税込）</span>
                  )}
                </div>
                <CardDescription className="mt-1">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              {/* 特長リスト */}
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.popular ? "text-blue-600" : "text-gray-500"
                        }`}
                      />
                      <p className="ml-3 text-sm text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* CTA */}
              <CardFooter className="mt-auto">
                <Link
                  href={
                    plan.name === "カスタムプラン"
                      ? "/contact?plan=custom"
                      : "/contact"
                  }
                  className="w-full"
                >
                  <span
                    className={`inline-block w-full text-center py-2 px-4 rounded-md ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : plan.name === "カスタムプラン"
                        ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    {plan.cta}
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
