"use client"

import Link from "next/link"
import { useState } from "react"
import { 
  FileText, 
  Mail, 
  FileCheck, 
  BarChart2, 
  Calendar, 
  ClipboardList,
  MessageSquare,
  Bell
} from "lucide-react"

export default function UseCases() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const useCases = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "注文書転記の自動化",
      description: "FAX注文をOCRで自動記録",
      detail: "転記の手間とミスを削減",
      industry: "卸売・小売業"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "メルマガ配信の自動化",
      description: "投稿内容から文面を自動作成",
      detail: "配信作業ゼロで頻度アップ",
      industry: "マーケティング"
    },
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "電子帳簿整理の効率化",
      description: "請求PDFを自動で分類保存",
      detail: "電帳法対応が仕組みで完結",
      industry: "経理・会計"
    },
    {
      icon: <BarChart2 className="h-5 w-5" />,
      title: "データ集約作業の自動化",
      description: "複数画面の情報を自動統合",
      detail: "会議資料の作成が不要に",
      industry: "事務・企画"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "カレンダー通知の自動化",
      description: "登録予定を前日に自動通知",
      detail: "イベント忘れ・漏れを防止",
      industry: "全社共通"
    },
    {
      icon: <ClipboardList className="h-5 w-5" />,
      title: "日報集計の自動化",
      description: "入力データを自動で集計",
      detail: "手集計からの解放と可視化",
      industry: "現場業務"
    },
    // 画像2の事例も追加
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "問い合わせ自動返信",
      description: "お問い合わせフォームからの質問に対して、AIが自動で適切な返答を作成します。",
      detail: "",
      industry: "カスタマーサポート"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Slack通知",
      description: "重要なイベントやデータ更新があった際に、自動でSlackに通知を送信します。",
      detail: "",
      industry: "全社共通"
    }
  ]

  // 表示するアイテム数を制御
  const visibleItems = isExpanded ? useCases : useCases.slice(0, 6)

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">こんな業務を自動化できます</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            QuickOpsは様々な業種・業務に対応しています
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((useCase, index) => (
            <div 
              key={index} 
              className="flex items-start rounded-lg border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                {useCase.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
                {useCase.detail && (
                  <p className="mt-1 text-blue-600 font-medium">{useCase.detail}</p>
                )}
                <p className="mt-1 text-sm text-gray-600">{useCase.description}</p>
                {useCase.industry && (
                  <div className="mt-2 inline-block px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                    {useCase.industry}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* もっと見るボタン */}
        {useCases.length > 6 && (
          <div className="mt-10 text-center">
            <button 
              className="flex items-center mx-auto space-x-2 text-blue-600 hover:text-blue-800 transition-colors focus:outline-none"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '閉じる' : 'もっと見る'} 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}