import { Code, Zap, Scale } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "専門知識不要",
    description: "プログラミングの知識がなくても、業務を自動化できます。専門的なITスキルは一切必要ありません。",
    icon: Code,
  },
  {
    name: "最短3営業日で導入完了",
    description: "ヒアリングから実装、テストまで、最短3営業日でお客様の業務を自動化します。",
    icon: Zap,
  },
  {
    name: "スモールスタートが可能",
    description: "小規模な単発改善から全社的なAI・DX支援までスケーラブルに対応します。",
    icon: Scale,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">ビジネスを加速する3つの特徴</h2>
          <p className="mt-4 text-lg text-gray-600">
            QuickOpsは「より速く作業する」のではなく「作業をなくす」ことを目指します
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
