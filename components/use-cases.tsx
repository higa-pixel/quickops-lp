"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, BookOpen, BarChart2, Calendar, ClipboardList, FileCheck, Bell, Target, ArrowRight } from "lucide-react"
import Link from "next/link" // Linkコンポーネントをインポート
import { useState } from "react" // useStateをインポート（ボタンテキスト変更用）

const cases = [
  // 省略（元のデータをそのまま使用）
]

export default function UseCases() {
  // ボタンのテキスト状態を管理
  const [isExpanded, setIsExpanded] = useState(false)

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
              // クライアントサイドの処理
              const moreContent = document.getElementById('more-cases');
              if (moreContent) {
                const isHidden = moreContent.classList.contains('hidden');
                if (isHidden) {
                  moreContent.classList.remove('hidden');
                  setIsExpanded(true); // 状態を更新
                } else {
                  moreContent.classList.add('hidden');
                  setIsExpanded(false); // 状態を更新
                }
              }
            }}
          >
            {isExpanded ? '閉じる' : 'もっと見る'} <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
        
        {/* CTAセクション */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">あなたの業務にも自動化できる部分があるかもしれません</h3>
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              無料相談を予約する
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}