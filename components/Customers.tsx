"use client"

import Link from "next/link"
import { useState } from "react"
import { Building2, Users, Workflow, TrendingUp } from "lucide-react"

export default function Customers() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const targetCustomers = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "中小企業",
      description: "従業員10～100名の事業者様",
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "DXリソース不足",
      description: "社内にDX人材・スキルが不足している企業様",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "属人化業務の解消",
      description: "属人化した業務を標準化したい部門",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "生産性向上",
      description: "売上・生産性を向上させたい企業様",
    },
    // 隠しコンテンツ用に追加のターゲット顧客があれば追加
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "営業効率化",
      description: "営業プロセスを効率化したい企業様",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "リモートワーク導入",
      description: "リモートワークの生産性向上を目指す企業様",
    },
  ]

  // 表示するアイテム数を制御
  const visibleItems = isExpanded ? targetCustomers : targetCustomers.slice(0, 4)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">導入対象</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            QuickOpsは以下のような企業・部門で特に高い効果を発揮します
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((customer, index) => (
            <div 
              key={index} 
              className="relative bg-card rounded-lg border border-border shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">
                    {customer.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {customer.title}
                </h3>
                <p className="text-muted-foreground">
                  {customer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* もっと見るボタン - 追加のアイテムがある場合のみ表示 */}
        {targetCustomers.length > 4 && (
          <div className="mt-10 text-center">
            <button 
              className="flex items-center mx-auto space-x-2 text-primary hover:text-primary/80 transition-colors focus:outline-none"
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