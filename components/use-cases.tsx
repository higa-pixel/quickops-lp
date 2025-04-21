import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cases = [
  { title: "見積書作成", detail: "30分→5分に短縮" },
  { title: "Slack通知", detail: "手動工数ゼロ化" },
  { title: "レポート作成", detail: "人件費15％削減" },
  { title: "問い合わせ自動返信", detail: "即レスで顧客満足度向上" },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">活用事例</h2>
        <p className="mt-2 text-center text-gray-600">一部の導入事例をご紹介します。</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <Card key={c.title} className="border-gray-200">
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{c.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:underline">＋ more examples</button>
        </div>
      </div>
    </section>
  )
}