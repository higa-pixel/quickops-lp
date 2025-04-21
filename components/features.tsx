import { Code, Zap, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "誰でも使えるノーコード",
    description: [
      "プログラミング不要で直感的に操作可能",
      "専門知識がなくてもすぐに始められる",
    ],
    icon: Code,
  },
  {
    name: "わずか3日で導入完了",
    description: [
      "要件定義～テストを3営業日で完了",
      "即時に運用を開始可能",
    ],
    icon: Zap,
  },
  {
    name: "小さく始めて大きく伸ばせる",
    description: [
      "業務単位でステップ導入OK",
      "段階的に範囲拡張が可能",
    ],
    icon: Scale,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">ビジネスのメリット</h2>
          <p className="mt-4 text-lg text-gray-600">
            QuickOpsは“作業をなくす”を目指し、以下の価値を提供します。
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.name} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl mb-2">{f.name}</CardTitle>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {f.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}