// app/policy/page.js
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          株式会社クラマー（以下「当社」）は、QuickOps（以下「本サービス」）の提供にあたり、ユーザーの個人情報保護の重要性を認識し、個人情報保護に関する法令を遵守すると共に、以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取扱いと保護に努めます。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">1. 収集する情報</h2>
        <p className="mb-4">
          当社は、本サービスの提供にあたり、以下の情報を取得します。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>氏名</li>
          <li>会社名</li>
          <li>メールアドレス</li>
          <li>電話番号</li>
          <li>Webサイトの閲覧履歴、IPアドレス等の利用状況に関する情報</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">2. 利用目的</h2>
        <p className="mb-4">
          当社は、取得した個人情報を以下の目的で利用します。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>本サービスの提供・運営</li>
          <li>ユーザーからのお問い合わせへの対応</li>
          <li>利用規約に違反する行為への対応</li>
          <li>当社サービスの改善・新サービスの開発</li>
          <li>キャンペーン・アンケート等の実施</li>
          <li>サービスに関する重要なお知らせの連絡</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">3. 第三者提供</h2>
        <p className="mb-4">
          当社は、法令に基づく場合を除いて、ユーザーの同意なく個人情報を第三者に提供することはありません。ただし、以下の場合は例外とします。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要がある場合</li>
          <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
          <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">4. 業務委託</h2>
        <p className="mb-4">
          当社は、個人情報の取扱いの全部または一部を第三者に委託する場合があります。委託にあたっては、委託先に対し、個人情報の安全管理が図られるよう必要かつ適切な監督を行います。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">5. セキュリティ</h2>
        <p className="mb-4">
          当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施します。ただし、完全な安全性を保証するものではありません。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">6. Cookieの使用</h2>
        <p className="mb-4">
          当社のウェブサイトでは、ユーザー体験の向上やサービス改善のためにCookieを使用しています。Cookieの使用を望まない場合は、ブラウザの設定を変更することで無効化できますが、一部のサービス機能が利用できなくなる可能性があります。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">7. 個人情報の開示・訂正・削除</h2>
        <p className="mb-4">
          ユーザーは、当社に対して自己の個人情報の開示・訂正・削除・利用停止を請求することができます。請求を行う場合は、本ポリシー末尾の連絡先までご連絡ください。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">8. 法令・規範の遵守と見直し</h2>
        <p className="mb-4">
          当社は、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。本ポリシーの内容は、法令の変更や事業内容の変更等により、事前の予告なく変更される場合があります。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">9. お問い合わせ先</h2>
        <p className="mb-4">
          本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
        </p>
        <p className="mb-4">
          株式会社クラマー<br />
          メールアドレス：info@quickops.jp
        </p>

        <p className="mt-8 text-sm text-gray-600">
          制定日：2025年4月1日<br />          
        </p>

        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}