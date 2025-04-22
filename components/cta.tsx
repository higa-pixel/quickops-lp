"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-blue-600 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">業務の自動化を始めませんか？</h2>
          <p className="mt-4 text-lg text-blue-100">
            最短3営業日で、あなたの業務を「仕組みで回る」ように変えます。
            <br />
            まずは無料相談で、どんな業務が自動化できるかご相談ください。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-white px-8 text-blue-600 hover:bg-blue-50 shadow-md">
                無料相談を予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/download">
              <Button size="lg" variant="outline" className="border-blue-200 bg-white/10 px-8 text-white hover:bg-blue-700 shadow-md">
                資料をダウンロードする
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}