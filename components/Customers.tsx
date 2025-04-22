"use client"

import Link from "next/link"

export default function Customers() {
    return (
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">導入対象</h2>
          <ul className="mt-6 inline-grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            <li>・従業員10～100名の中小企業</li>
            <li>・DXリソース・スキルが不足している企業</li>
            <li>・属人化した業務を標準化したい部門</li>
            <li>・売上・生産性を向上させたい企業</li>
          </ul>
        </div>
      </section>
    )
  }