import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    day: "Day 0",
    title: "ヒアリング",
    description: "お客様の課題や自動化したい業務についてヒアリングします。オンラインで30分程度です。",
  },
  {
    day: "Day 1",
    title: "要件定義",
    description: "自動化する業務の詳細な要件を定義し、最適なソリューションを設計します。",
  },
  {
    day: "Day 2",
    title: "構築",
    description: "設計に基づいて自動化の仕組みを構築し、テストを行います。",
  },
  {
    day: "Day 3",
    title: "納品",
    description: "完成した自動化の仕組みを納品し、運用を開始します。必要に応じてトレーニングも実施します。",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">最短3日で業務自動化</h2>
          <p className="mt-4 text-lg text-gray-600">QuickOpsの導入プロセスはシンプルで迅速です</p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative">
            {/* 縦線 */}
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

                  {/* モバイル表示用 */}
                  <div className="mt-3 ml-12 md:hidden">
                    {index % 2 === 1 && (
                      <>
                        <div className="mb-2 text-sm font-semibold text-blue-600">{step.day}</div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </>
                    )}
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
