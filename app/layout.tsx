import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })


export const metadata: Metadata = {
  title: "Martial Arts Academy - Chandra Kumar Sahu",
  description: "Transform your life through martial arts training",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}