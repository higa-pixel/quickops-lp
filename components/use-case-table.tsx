import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  MessageSquare,
  Bell,
  Calendar,
  CheckSquare,
  FileText,
  FileSpreadsheet,
  PenTool,
  FileTextIcon,
} from "lucide-react"

export default function UseCaseTable() {
  const useCases = [
    {
      icon: <Users className="h-5 w-5 text-[#2196F3]" />,
      scene: "顧客管理",
      content: "問い合わせフォーム → 顧客リスト反映",
      tools: "Google Forms + Sheets",
      example: "Webフォーム入力 → 顧客一覧に自動反映",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-[#2196F3]" />,
      scene: "問い合わせ対応",
      content: "自動返信（定型文）",
      tools: "Forms + Gmail（Zapier）",
      example: "「お問い合わせありがとうございます」などを即時返信",
    },
    {
      icon: <Bell className="h-5 w-5 text-[#2196F3]" />,
      scene: "社内通知",
      content: "Gmailの特定メール → Slack通知",
      tools: "Gmail + Zapier + Slack",
      example: "「入金通知」「契約完了」メールをSlackチャンネルへ",
    },
    {
      icon: <Calendar className="h-5 w-5 text-[#2196F3]" />,
      scene: "イベント管理",
      content: "カレンダー登録 → 前日メール通知",
      tools: "Google Calendar + Zapier",
      example: "勉強会・商談の前日に担当者にリマインド",
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-[#2196F3]" />,
      scene: "タスク確認",
      content: "チェックリスト完了 → LINE通知",
      tools: "Sheets + Zapier + LINE Bot",
      example: "日報チェック欄が埋まったら、上⻑に「報告完了通知」送信",
    },
    {
      icon: <FileText className="h-5 w-5 text-[#2196F3]" />,
      scene: "日報集計",
      content: "フォーム入力 → 月次レポート",
      tools: "Forms + Sheets + Charts",
      example: "スタッフ日報を自動集計し、月別グラフとして見える化",
    },
    {
      icon: <FileTextIcon className="h-5 w-5 text-[#2196F3]" />,
      scene: "見積り生成",
      content: "フォーム入力 → 自動見積テキスト作成",
      tools: "Forms + Zapier + ChatGPT",
      example: "商品・条件入力 → AIがメール文生成し営業担当に送信",
    },
    {
      icon: <FileSpreadsheet className="h-5 w-5 text-[#2196F3]" />,
      scene: "スプレッドシート通知",
      content: "状況更新 → 担当者に通知",
      tools: "Sheets + Zapier + Gmail/Slack",
      example: 'ステータス列が"完了"になったら、担当者に自動でアラート',
    },
    {
      icon: <PenTool className="h-5 w-5 text-[#2196F3]" />,
      scene: "自動文章生成",
      content: "フォーム入力 → ChatGPTで提案文作成",
      tools: "Forms + Zapier + ChatGPT",
      example: "要望に応じたメール文案、SNS文案、返信文のたたき台をAIが生成",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">業務シーン</TableHead>
            <TableHead>内容</TableHead>
            <TableHead>使用ツール</TableHead>
            <TableHead className="hidden md:table-cell">具体的なユースケース例</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useCases.map((useCase, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {useCase.icon}
                  <span>{useCase.scene}</span>
                </div>
              </TableCell>
              <TableCell>{useCase.content}</TableCell>
              <TableCell>{useCase.tools}</TableCell>
              <TableCell className="hidden md:table-cell">{useCase.example}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
