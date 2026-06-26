import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'CoinPulse | داشبورد رمزارز',description:'داشبورد فارسی و راست‌به‌چپ رمزارزها'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning><body>{children}</body></html>}
