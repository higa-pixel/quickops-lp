"use client"

import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    day: "Step 1",
    title: "無料相談",
    description: "お客様の課題や自動化したい業務についてヒアリングします。オンラインで30分程度の気軽な相談から始めましょう。",
  },
  {
    day: "Step 2",
    title: "プラン選定",
    description: "ヒアリング内容をもとに、最適なプランをご提案します。目的や予算に合わせてカスタマイズすることも可能です。",
  },
  {
    day: "Step 3",
    title: "契約・初期設定",
    description: "ご契約後、すぐに初期設定を行います。アカウント発行やツール連携など、専任スタッフがサポートします。",
  },
  {
    day: "Step 4",
    title: "サービス開始",
    description: "定期的な面談やチャットサポートを通じて、継続的に業務改善を進めていきます。毎月の自動化で業務効率化を実現します。",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サービス導入の流れ</h2>
          <p className="mt-4 text-lg text-gray-600">QuickOpsの導入プロセスはシンプルで迅速です</p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 md:left-1/2 md:-ml-0.5"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.day} className="relative">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8 md:text-right">
                      {index % 2 === 0 ? (
                        <>
                          <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    <div className="absolute left-0 top-1/2 -mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                      {index % 2 === 1 ? (
                        <>
                          <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>
                  </div>

                  {/* モバイル表示用（常に表示） */}
                  <div className="md:hidden ml-4 mt-8">
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
    </section>
  )
}
