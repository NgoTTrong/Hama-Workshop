import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600", "700"],
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Cá Nhân Hóa Theo Yêu Cầu | Gỗ Thủ Công × In 3D",
  description:
    "Sản phẩm gỗ thủ công và in 3D hiện đại. Không đại trà, không rập khuôn - mỗi sản phẩm được tạo ra cho đúng người sử dụng.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased" style={{ backgroundColor: "#faf9f6" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
