import { Mail, FileText, Bell, MessageSquare, Calendar, BarChart } from "lucide-react"

const useCases = [
  {
    name: "問い合わせ自動返信",
    description: "お問い合わせフォームからの質問に対して、AIが自動で適切な返答を作成します。",
    icon: Mail,
  },
  {
    name: "見積書作成",
    description: "顧客情報と要件から、AIが自動で見積書を作成し、承認フローを経て送信します。",
    icon: FileText,
  },
  {
    name: "Slack通知",
    description: "重要なイベントやデータ更新があった際に、自動でSlackに通知を送信します。",
    icon: Bell,
  },
  {
    name: "AIチャットボット",
    description: "最新のAI技術を活用したチャットボットが、24時間365日自動で顧客対応や社内問い合わせに回答します。",
    icon: MessageSquare,
  },
  {
    name: "スケジュール調整",
    description: "複数の参加者のスケジュールを自動で調整し、会議の日程を決定します。",
    icon: Calendar,
  },
  {
    name: "レポート作成",
    description: "データを自動で集計し、週次・月次レポートを作成します。",
    icon: BarChart,
  },
]

const targetCompanies = [
  "中小企業（従業員10〜100名程度）",
  "DXや業務改善に興味はあるが、リソース・スキルが不足している企業",
  "特定の担当者に業務が集中している属人環境",
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">こんな業務を自動化できます</h2>
          <p className="mt-4 text-lg text-gray-600">QuickOpsは様々な業種・業務に対応しています</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.name}
              className="flex items-start rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <useCase.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{useCase.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ターゲット企業セクション */}
        <div className="mt-20 mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">こんな企業様におすすめです</h3>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <ul className="space-y-4">
              {targetCompanies.map((company, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-lg text-gray-700">{company}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
