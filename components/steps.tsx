"use client"

import { CheckCircle2 } from "lucide-react"

const steps = [
  // 共通
  { day: "Step 1", title: "無料相談",
    description: "課題とゴールを共有します。" },

  { day: "Step 2", title: "ミニ診断 & 目標設定",
    description: "自走か開発代行か、最適ルートを決定します。" },

  // Aルート: サポート型
  { day: "Step 3A", title: "自走セットアップ支援",
    description: "ガイド資料とアドバイスで、お客様自身が初期設定を行います。" },

  { day: "Step 4A", title: "伴走サポート開始",
    description: "月次面談とチャット相談で運用を継続フォローします。" },

  // Bルート: 導入代行型
  { day: "Step 3B", title: "詳細設計 & 見積り",
    description: "QuickOps が設計書と見積りを提示します。" },

  { day: "Step 4B", title: "システム開発 & 導入",
    description: "開発・テスト・納品までワンストップで実施します。" },

  // 共通ゴール
  { day: "Step 5", title: "継続改善",
    description: "運用データを基に、追加自動化や改修を提案します。" },
];


export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サービス導入の流れ</h2>
          <p className="mt-4 text-lg text-gray-600">QuickOpsの導入プロセスはシンプルで迅速です</p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          {/* デスクトップ用タイムライン */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -ml-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={`desktop-${step.day}`} className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-1/2 pr-12 text-right">
                      {index % 2 === 0 ? (
                        <>
                          <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </>
                      ) : (
                        <div />
                      )}
                    </div>

                    <div className="absolute left-1/2 top-1/2 -mt-3 -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div className="w-1/2 pl-12">
                      {index % 2 === 1 ? (
                        <>
                          <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* モバイル用タイムライン - シンプルな縦並び */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={`mobile-${step.day}`} className="relative">
                    <div className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="ml-16">
                      <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}