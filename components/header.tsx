"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/placeholder-logo.png" 
              alt="QuickOps" 
              width={120} 
              height={40} 
            />
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            特徴
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            活用例
          </Link>
          <Link href="#timeline" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            導入の流れ
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            料金
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            よくある質問
          </Link>
          <Link href="/downloads/quickops-guide.pdf">
            <Button size="sm" variant="outline" className="ml-4">
              資料ダウンロード
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm">無料相談を予約</Button>
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="flex md:hidden">
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
            <Link
              href="#features"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              特徴
            </Link>
            <Link
              href="#use-cases"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              活用例
            </Link>
            <Link
              href="#timeline"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              導入の流れ
            </Link>
            <Link
              href="#pricing"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              料金
            </Link>
            <Link
              href="#faq"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <div className="mt-4 flex flex-col space-y-2">
              <Link href="/downloads/quickops-service-document.pdf" className="w-full">
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