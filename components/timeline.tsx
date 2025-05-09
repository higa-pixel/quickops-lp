"use client"

import { CheckCircle2 } from "lucide-react"

const steps = [
  { day: "Step 1", title: "無料相談 (30 min)", description: "課題とゴールを共有し、ざっくり効果を試算します。" },
  { day: "Step 2", title: "ミニ診断 & ルート選択", description: "自走サポート(A) または 開発代行(B) の最適ルートを決定。" },
  { day: "Step 3-A", title: "自走セットアップ支援", description: "ガイド資料とハンズオンで、お客様が初期設定を完了。" },
  { day: "Step 3-B", title: "詳細設計 & 見積り", description: "QuickOps が設計書と見積りを提示し、開発を開始。" },
  { day: "Step 4", title: "運用開始 & 継続改善", description: "月次レビューで効果を可視化し、追加自動化を提案。" },
]

export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サービス導入の流れ</h2>
          <p className="mt-4 text-lg text-gray-600">4 ステップ、最短 2 週間で運用開始</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* 縦ライン */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-200 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div key={step.day} className="relative">
                {/* アイコン */}
                <div className="absolute left-4 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div className="md:flex md:items-center md:justify-between">
                  {/* テキストブロック */}
                  <div
                    className={`pl-14 md:pl-0 md:w-1/2 md:pr-8 md:text-right ${idx % 2 ? "md:order-2" : ""}`}
                  >
                    <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
