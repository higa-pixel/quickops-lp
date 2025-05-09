import { Code, Zap, LifeBuoy } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

/* ───────────────────────────────
   “QuickOps らしさ” を 3 点に凝縮
   1) 現場が動かせる簡単設定
   2) 1 業務から段階導入
   3) 伴走サポートで定着
─────────────────────────────── */
const features = [
  {
    name: "現場で動かせる簡単設定",
    description: [
      "ドラッグ＆ドロップで誰でもフロー作成",
      "複雑な部分はQuickOpsがセットアップ",
    ],
    icon: Code,
  },
  {
    name: "1業務から段階導入",
    description: [
      "初月にテスト運用→効果を可視化",
      "伸ばす業務だけスケールアップ",
    ],
    icon: Zap,
  },
  {
    name: "伴走サポートで成果を持続",
    description: [
      "月次レビューで KPI を追跡",
      "チャットで疑問を即解決",
    ],
    icon: LifeBuoy,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            ビジネスのメリット
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            QuickOps は“作業をなくす”ために、次の3つの価値を提供します。
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.name} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mb-2 text-xl">{f.name}</CardTitle>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
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
