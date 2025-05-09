// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "QuickOps",
  description: "AIとノーコードで日常業務を最短3営業日で自動化するサービス",
  generator: "QuickOps",
};

const GTM_ID = "GTM-NJMDC4FB";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ★ nonce を使う場合は
       import { cookies } from "next/headers";
       const nonce = cookies().get("csp-nonce")?.value ?? "";
     として <Script nonce={nonce}> に渡してください。
     いったん CSP を 'unsafe-inline' で緩めるなら nonce 行は不要です。 */
  return (
    <html lang="ja">
      <head>
        {/* dataLayer 初期化 + gtm.js ローダー */}
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          /* ↑ CSP で nonce を運用するなら nonce={nonce} を追加 */
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>

      <body>
        {/* noscript フォールバック */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
