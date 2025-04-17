import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "サービスはいつから開始できますか？",
    answer:
      "お申し込み後、最短で翌営業日からサービスを開始できます。初回のヒアリングを経て、3営業日以内に最初の自動化を納品します。",
  },
  {
    question: "ITツールの費用は月額に含まれますか？",
    answer:
      "基本的なツール（Zapier、Google Workspace、ChatGPTなど）の費用は含まれていません。ただし、可能な限り無料プランや既にお持ちのツールを活用するよう設計します。必要なツールとその費用については、初回のヒアリング時にご説明します。",
  },
  {
    question: "最低契約期間はありますか？",
    answer:
      "最低契約期間は3ヶ月となります。自動化の効果を十分に実感いただくために、3ヶ月間の継続をおすすめしています。",
  },
  {
    question: "解約ルールを教えてください。",
    answer:
      "解約をご希望の場合は、契約更新日の1ヶ月前までにご連絡ください。解約後も、構築した自動化の仕組みは引き続きご利用いただけます（ただし、サポートや調整は含まれません）。",
  },
  {
    question: "AIやコーディング対応は可能ですか？",
    answer:
      "はい、可能です。ChatGPTなどのAIツールを活用した自動化や、必要に応じたカスタムコーディングも対応可能です。特に高度な開発が必要な場合は、カスタムプランをご検討ください。",
  },
  {
    question: "自動化できる業務の例は？",
    answer:
      "メール返信、見積書作成、データ入力、レポート作成、スケジュール調整、Slack通知、フォーム処理、請求書発行など、様々な業務を自動化できます。具体的な業務については、無料相談でご相談ください。",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">よくある質問</h2>
          <p className="mt-4 text-lg text-gray-600">サービスについてよくいただく質問にお答えします</p>
        </div>
        <div className="mt-16 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
