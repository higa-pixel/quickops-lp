import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, FileText, Zap, MessageSquare, Layers, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import ProcessStep from "@/components/process-step"
import UseCaseTable from "@/components/use-case-table"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              QuickOps <span className="text-2xl md:text-3xl text-gray-600">クイックオプス</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              「その業務、3日後には<span className="font-bold text-[#2196F3]">"仕組みで回る"</span>ようにしませんか？」
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              ChatGPTとクラウドツールを活用し、"人がやっていた日常業務"を最短3営業日で自動化するノーコード業務改善サービス
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-[#2196F3] hover:bg-[#1976D2]">
                無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                サービス資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-[#2196F3]" />}
              title="専門知識不要"
              description="ヒアリングから設定まで全てお任せ。技術的な知識がなくても導入できます。"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-[#2196F3]" />}
              title="ノーコード中心"
              description="必要に応じてPythonによる高度対応も可能。あなたの業務に最適な方法で自動化します。"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-10 w-10 text-[#2196F3]" />}
              title="導入実績多数"
              description="中小企業や現場職場での再現性が高く、様々な業種で活用されています。"
            />
          </div>
        </div>
      </section>

      {/* Target & Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">想定ターゲット</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>中小企業（従業員10〜100名程度）</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>DXや業務改善に興味はあるが、リソース・スキルが不足している企業</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>特定の担当者に業務が集中している属人環境</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">よくある課題</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>FAXや紙ベースのやりとりがいまだに多い</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>日報・予約・請求業務など、毎日のルーチンが手間</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>自動化したいが、何から手をつけていいか分からない</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ChatGPTなどのAIツールは触ったことはあるが活かしきれていない</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>「業務を効率化しよう」と話が出るが、誰も動き出せない</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ツール導入に抵抗のあるメンバーがいて進めづらい</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">導入プロセス（最短3営業日で導入）</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessStep
              day="Day 0"
              title="ヒアリング"
              description="お客様による入力シートへの記入及びヒアリングで対象業務を特定"
              icon={<MessageSquare className="h-8 w-8 text-[#2196F3]" />}
            />
            <ProcessStep
              day="Day 1"
              title="調整"
              description="お客様の業務に合わせて最小構成で調整"
              icon={<Layers className="h-8 w-8 text-[#2196F3]" />}
            />
            <ProcessStep
              day="Day 2"
              title="構築"
              description="Zapier/GASなどでノーコード構築＋動作テスト"
              icon={<Zap className="h-8 w-8 text-[#2196F3]" />}
            />
            <ProcessStep
              day="Day 3"
              title="納品"
              description="納品＋説明動画共有＋運用開始（初回1回まで調整無料）"
              icon={<CheckCircle2 className="h-8 w-8 text-[#2196F3]" />}
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">提供プラン（シンプルでわかりやすく）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="スタータープラン"
              description="ノーコードで1業務の自動化（テンプレ調整・導入まで）"
              price="¥10,000"
              priceDetail="※30日以内返金可"
              features={["1業務の自動化", "テンプレート調整", "導入サポート", "30日以内返金保証"]}
              buttonText="プランを選択"
            />
            <PricingCard
              title="月次サポート"
              description="月1回Zoomミーティング＋運用相談＋改善アドバイス"
              price="¥10,000/月"
              priceDetail="※3か月更新。初月無料"
              features={["月1回のZoomミーティング", "運用相談", "改善アドバイス", "初月無料"]}
              buttonText="プランを選択"
              highlighted={true}
            />
            <PricingCard
              title="カスタム対応"
              description="Python対応が必要な業務、画像処理、Bot開発などは別途お見積り"
              price="¥応相談"
              priceDetail="¥100,000〜"
              features={["Python対応", "画像処理", "Bot開発", "カスタム開発"]}
              buttonText="お見積り依頼"
            />
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">LINE登録 or 無料相談の特典（選べる2タイプ）</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>特典①</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>ノーコード業務自動化テンプレート一覧PDF（業務別15パターン）</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>特典②</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>業務可視化ヒアリングシート＋活用例（そのまま社内展開OK）</p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-gray-700">
              ご希望の方は、LINE登録 or 無料相談フォームからダウンロード案内をお送りします。
            </p>
            <Button size="lg" className="mt-6 bg-[#2196F3] hover:bg-[#1976D2]">
              特典を受け取る
            </Button>
          </div>
        </div>
      </section>

{/* CTA フォーム埋め込みセクション */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-12">無料相談・資料請求フォーム</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">無料相談</h3>
        <iframe
          src="https://tally.so/r/mDWybR" // ← 実際の無料相談フォームURL
          width="100%"
          height="600"
          frameBorder="0"
          title="無料相談フォーム"
        ></iframe>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">資料請求</h3>
        <iframe
          src="https://tally.so/r/3jE2px" // ← 実際の資料請求フォームURL
          width="100%"
          height="600"
          frameBorder="0"
          title="資料請求フォーム"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ノーコードで自動化できること（一部抜粋）</h2>
          <UseCaseTable />
        </div>
      </section>

      {/* Python Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Python対応が必要なケースもカバー可能</h2>
          <p className="text-center mb-8 text-gray-700 max-w-3xl mx-auto">
            一部、以下のようなケースではノーコードでは難しく、QuickOpsがPythonで対応します：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>画像を送ってもらい、ChatGPT Visionで内容を認識 → LINEに返すBot</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>毎日APIから取得したデータ（例：金相場）を整形してLINE通知</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>複数のCSV/PDF/画像ファイルを統合して加工する</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>AIチャットボットでの複雑な会話ルール（複数条件、履歴保持など）</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-gray-700 max-w-3xl mx-auto">
            → 必要に応じてQuickOpsがReplitやGASを使ってサーバレス構築＋ホスティングまで対応します。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#2196F3] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">お問い合わせ・導入相談</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              まずは「自社の業務がノーコードで自動化できるか？」を無料で診断いたします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Clock className="h-8 w-8 mb-2" />
                    <p>所要時間：30分ヒアリング</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <FileText className="h-8 w-8 mb-2" />
                    <p>診断後：おすすめテンプレート＋導入可否をご案内</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <MessageSquare className="h-8 w-8 mb-2" />
                    <p>対応形式：Zoomまたはフォーム回答 → メール返信</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-[#2196F3] hover:bg-gray-100">
                無料相談を予約する
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                資料をダウンロード
              </Button>
            </div>
            <div className="mt-10 space-y-2">
              <p>✉️ info@klammer.co.jp</p>
              <p>
                🌐{" "}
                <Link href="https://klammer.co.jp" className="underline">
                  https://klammer.co.jp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2024 QuickOps（クイックオプス） All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}
