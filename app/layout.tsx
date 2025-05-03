import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Udemy Certificate - The Complete Full-Stack Web Development Bootcamp",
  description: "Certificate of completion for The Complete Full-Stack Web Development Bootcamp",
  icons: {
    icon: "/favicon.webp", // Updated path to the favicon
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  )
}
