import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoinPulse",
  description: "یک شروع مدرن Next.js با رابط کاربری فارسی و راست‌به‌چپ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.variable}>
        <div className="min-h-svh bg-background">
          <header className="border-b border-border/60">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <a href="/" className="text-lg font-bold tracking-tight">
                کوین‌پالس
              </a>
              <nav aria-label="ناوبری اصلی" className="text-sm text-muted-foreground">
                آماده توسعه
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
