import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kanzlei Dr. Max Berger | Fachanwalt für Arbeits- und Vertragsrecht Hamburg",
  description:
    "Rechtsanwalt Dr. Max Berger – Ihr Fachanwalt für Arbeits- und Vertragsrecht in Hamburg. Kompetente Beratung mit über 10 Jahren Erfahrung.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
