import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/*
 * 본문 글꼴을 아지트와 맞춘다 — 에이투지체(A2Z, SIL OFL 1.1, 사용 조건 fonts/a2z/OFL.txt, 2026-11-26).
 *
 * 아지트 원본은 `vibe_agit/src/assets/fonts/a2z/` 와 `design-system.css` 의 `--ui-font-sans` 다.
 * 두 저장소가 따로라 같은 파일을 복사해 두었다 — 아지트 글꼴을 바꾸면 여기 파일과 이 선언도 같이 바꾼다.
 * 굵기는 범위로 이어 빈 굵기가 없게 한다 — 굵기가 없으면 브라우저가 억지로 굵게 그린다.
 */
const a2z = localFont({
  variable: "--font-ui-sans",
  display: "swap",
  preload: false, // 굵기 6개(각 약 115KB)를 미리 다 받지 않고, 화면에 쓰인 굵기만 받는다(아지트와 같게)
  // 굵기 한 단계 낮춤(2026-11-26 선생님) — 아지트 design-system.css 의 @font-face 범위와 같은 연결표.
  // 500 이하 → 4 Regular · 600 → 5 Medium · 700 → 6 SemiBold · 800 → 7 Bold · 900 → 8 ExtraBold
  src: [
    { path: "./fonts/a2z/a2z-400.woff2", weight: "1 500", style: "normal" },
    { path: "./fonts/a2z/a2z-500.woff2", weight: "501 600", style: "normal" },
    { path: "./fonts/a2z/a2z-600.woff2", weight: "601 700", style: "normal" },
    { path: "./fonts/a2z/a2z-700.woff2", weight: "701 800", style: "normal" },
    { path: "./fonts/a2z/a2z-800.woff2", weight: "801 1000", style: "normal" },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "끄적끄적 아지트 | 글쓰기 연구소",
  description: "끄적끄적 아지트의 교실 글쓰기 활동 연구소",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${a2z.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="border-t border-slate-200 bg-white px-4 py-4 text-center text-sm text-slate-500">
          상호명: 끄적끄적아지트 · 운영책임자: 유승현 · 문의:{" "}
          <a className="font-medium text-slate-600 underline-offset-2 hover:underline" href="mailto:yshgg@naver.com">
            yshgg@naver.com
          </a>
        </footer>
      </body>
    </html>
  );
}
