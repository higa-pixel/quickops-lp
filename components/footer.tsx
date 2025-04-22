import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* 左カラム - QuickOps情報 */}
          <div className="md:w-1/2 lg:w-2/5">
            <h3 className="text-lg font-semibold text-white">QuickOps</h3>
            <p className="mt-4 text-sm">AIとノーコードで日常業務を最短3営業日で自動化するサービス</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-blue-400" />
                <a href="mailto:info@quickops.jp" className="text-sm hover:text-blue-400">
                  info@quickops.jp
                </a>
              </div>
              <div className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4 text-blue-400" />
                <a href="https://quickops.jp" className="text-sm hover:text-blue-400">
                  https://quickops.jp
                </a>
              </div>
            </div>
          </div>

          {/* 右カラム - サービスリンク */}
          <div className="md:w-1/2 lg:w-3/5">
            <h3 className="text-lg font-semibold text-white mb-4">サービス</h3>
            {/* スマホでは1列、タブレット以上では2列グリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <Link href="#features" className="text-sm hover:text-blue-400 py-1">
                サービスの特徴
              </Link>
              <Link href="#pricing" className="text-sm hover:text-blue-400 py-1">
                料金プラン
              </Link>
              <Link href="#use-cases" className="text-sm hover:text-blue-400 py-1">
                活用例
              </Link>
              <Link href="#faq" className="text-sm hover:text-blue-400 py-1">
                よくある質問
              </Link>
              <Link href="#timeline" className="text-sm hover:text-blue-400 py-1">
                導入の流れ
              </Link>
              <Link href="/contact" className="text-sm hover:text-blue-400 py-1">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* 下部セパレーター */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm">&copy; {new Date().getFullYear()} QuickOps. All rights reserved.</p>
            <div className="mt-4 sm:mt-0">
              <Link href="/policy" className="text-sm hover:text-blue-400">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}