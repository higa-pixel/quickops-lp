import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, BookOpen, BarChart2, Calendar, ClipboardList, FileCheck, Bell, Target, ArrowRight } from "lucide-react"

const cases = [
  { 
    title: "見積書作成の自動化", 
    detail: "30分→5分に短縮", 
    description: "顧客情報と要件から、AIが見積書を自動作成。承認フローも自動化され、大幅な時間短縮を実現しました。",
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    industry: "製造業"
  },
  { 
    title: "Slack通知の自動連携", 
    detail: "手動工数ゼロ化", 
    description: "重要なイベントやデータ更新が発生した際に、自動でSlackに通知。担当者の確認漏れを防止します。",
    icon: <Bell className="h-10 w-10 text-blue-600" />,
    industry: "IT業界"
  },
  { 
    title: "レポート作成の効率化", 
    detail: "人件費15％削減", 
    description: "週次・月次レポートをデータから自動生成。分析時間を確保し、より価値の高い意思決定が可能になりました。",
    icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
    industry: "小売業"
  },
  { 
    title: "問い合わせ自動返信", 
    detail: "即レスで顧客満足度向上", 
    description: "AIがお問い合わせ内容を理解し、適切な返答を自動生成。24時間365日の対応が可能になりました。",
    icon: <Mail className="h-10 w-10 text-blue-600" />,
    industry: "サービス業"
  },
  { 
    title: "FAX注文の自動処理", 
    detail: "転記作業を完全自動化", 
    description: "FAXで届いた注文書をOCRで自動読取り、システムに登録。転記ミスがゼロになり、処理速度が3倍に向上しました。",
    icon: <FileCheck className="h-10 w-10 text-blue-600" />,
    industry: "卸売業"
  },
  { 
    title: "メルマガ配信の自動化", 
    detail: "配信作業ゼロで頻度アップ", 
    description: "ブログ投稿やニュースから自動でメルマガ文面を作成し配信。担当者の工数削減と配信頻度の向上を実現しました。",
    icon: <Mail className="h-10 w-10 text-blue-600" />,
    industry: "EC業界"
  },
  { 
    title: "電子帳簿の自動整理", 
    detail: "電帳法対応が仕組みで完結", 
    description: "請求書PDFを自動で分類・保存し、電子帳簿保存法に対応。経理担当の業務負担を大幅に軽減しました。",
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    industry: "会計事務所"
  },
  { 
    title: "データ集約の効率化", 
    detail: "会議資料作成が不要に", 
    description: "複数システムの情報を自動で統合し、必要なレポートを自動生成。会議準備の時間を80%削減しました。",
    icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
    industry: "人材業界"
  },
  { 
    title: "カレンダー通知の自動化", 
    detail: "イベント忘れ・漏れを防止", 
    description: "予定表から重要イベントを自動検出し、前日に関係者へ通知。参加率の向上とフォロー漏れを防止しています。",
    icon: <Calendar className="h-10 w-10 text-blue-600" />,
    industry: "教育機関"
  },
  { 
    title: "日報集計の自動化", 
    detail: "手集計からの解放と可視化", 
    description: "現場の日報データを自動で集計・分析し、ダッシュボード化。リアルタイムの状況把握が可能になりました。",
    icon: <Target className="h-10 w-10 text-blue-600" />,
    industry: "建設業"
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">活用事例</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          様々な業界・業種で業務効率化を実現しています。<br />
          あなたの業務に合わせた自動化をご提案します。
        </p>
        
        {/* メインの4つの事例 */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.slice(0, 4).map((c) => (
            <Card key={c.title} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{c.icon}</div>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 mb-2">{c.detail}</p>
                <p className="text-gray-600">{c.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                  {c.industry}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 追加の事例（デフォルトでは非表示） */}
        <div id="more-cases" className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 hidden">
          {cases.slice(4).map((c) => (
            <Card key={c.title} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{c.icon}</div>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 mb-2">{c.detail}</p>
                <p className="text-gray-600">{c.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                  {c.industry}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* もっと見るボタン */}
        <div className="mt-10 text-center">
          <button 
            className="flex items-center mx-auto space-x-2 text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={() => {
              const moreContent = document.getElementById('more-cases');
              const button = event.currentTarget;
              if (moreContent.classList.contains('hidden')) {
                moreContent.classList.remove('hidden');
                button.innerHTML = '閉じる <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
              } else {
                moreContent.classList.add('hidden');
                button.innerHTML = 'もっと見る <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
              }
            }}
          >
            もっと見る <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
        
        {/* CTAセクション */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">あなたの業務にも自動化できる部分があるかもしれません</h3>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            無料相談を予約する
          </button>
        </div>
      </div>
    </section>
  )
}