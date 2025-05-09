/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- 既存項目 ------------------------------------------------------------
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: "standalone",
  experimental: { outputStandalone: true },

  // --- 追加：全レスポンス共通ヘッダー ------------------------------------
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ブラウザキャッシュは常に無効
          { key: "Cache-Control", value: "no-store, max-age=0" },

          /* ▼ Content-Security-Policy
               - 'unsafe-inline' でまず動かし、
                 落ち着いたら nonce/hash 方式に置き換えるのがオススメ
               - GA4 への送信に必要な connect-src / img-src も忘れずに
          */
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
              "img-src 'self' https://www.google-analytics.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
