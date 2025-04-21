import Link from 'next/link';

export default function Thanks() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">お問い合わせありがとうございます</h1>
        <p className="mb-8">
          内容を確認次第、担当者よりご連絡いたします。
          しばらくお待ちくださいませ。
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">サービス資料のダウンロード</h2>
          <p className="mb-4">
            QuickOpsについてさらに詳しく知りたい方は、以下の資料をダウンロードしてください。
          </p>
          <a href="/downloads/quickops-service-document.pdf" download className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
            資料をダウンロード
          </a>
        </div>
        <Link href="/" className="text-blue-600 hover:underline">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}