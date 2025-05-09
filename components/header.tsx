"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /* 便利関数：共通で使う内部リンク（トップ + #hash） */
  const hashLink = (hash: string) => ({ pathname: "/", hash })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder-logo.png" alt="QuickOps" width={120} height={40} />
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href={hashLink("features")} className="text-sm font-medium text-gray-600 hover:text-blue-600">
            特徴
          </Link>
          <Link href={hashLink("use-cases")} className="text-sm font-medium text-gray-600 hover:text-blue-600">
            活用例
          </Link>
          <Link href={hashLink("timeline")} className="text-sm font-medium text-gray-600 hover:text-blue-600">
            導入の流れ
          </Link>
          <Link href={hashLink("pricing")} className="text-sm font-medium text-gray-600 hover:text-blue-600">
            料金
          </Link>
          <Link href={hashLink("faq")} className="text-sm font-medium text-gray-600 hover:text-blue-600">
            よくある質問
          </Link>

          {/* 電話番号 */}
          <a href="tel:050-1725-1867" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
            <Phone className="h-4 w-4 mr-1" />
            050-1725-1867
          </a>

          <Link href="/downloads/quickops-guide.pdf">
            <Button size="sm" variant="outline" className="ml-4">
              資料ダウンロード
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm">無料相談を予約</Button>
          </Link>
        </nav>

        {/* モバイル：電話 & ハンバーガー */}
        <div className="flex md:hidden">
          <a href="tel:050-1725-1867" className="flex items-center mr-4 text-sm font-medium text-blue-600">
            <Phone className="h-4 w-4 mr-1" />
            050-1725-1867
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">メニューを開く</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-6">
            <Link href={hashLink("features")} onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              特徴
            </Link>
            <Link href={hashLink("use-cases")} onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              活用例
            </Link>
            <Link href={hashLink("timeline")} onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              導入の流れ
            </Link>
            <Link href={hashLink("pricing")} onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              料金
            </Link>
            <Link href={hashLink("faq")} onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              よくある質問
            </Link>

            <div className="mt-4 flex flex-col space-y-2">
              <Link href="/downloads/quickops-guide.pdf" className="w-full">
                <Button variant="outline" className="w-full justify-center">
                  資料ダウンロード
                </Button>
              </Link>
              <Link href="/contact" className="w-full">
                <Button className="w-full justify-center">無料相談を予約</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
