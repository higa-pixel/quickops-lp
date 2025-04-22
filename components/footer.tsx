import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">QuickOps</h3>
            <p className="mt-4 text-sm">AIとノーコードで日常業務を最短3営業日で自動化するサービス</p>
            <div className="mt-6 space-y-2">
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

          <div>
            <h3 className="text-lg font-semibold text-white">サービス</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#features" className="text-sm hover:text-blue-400">
                  サービスの特徴
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-sm hover:text-blue-400">
                  活用例
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-sm hover:text-blue-400">
                  導入の流れ
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm hover:text-blue-400">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm hover:text-blue-400">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-400">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm">&copy; {new Date().getFullYear()} QuickOps. All rights reserved.</p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="/policy" className="text-sm hover:text-blue-400">
                プライバシーポリシー
              </Link>
              <Link href="/contact" className="text-sm hover:text-blue-400">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}