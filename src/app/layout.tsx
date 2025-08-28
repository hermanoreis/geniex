import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron"
})

export const metadata: Metadata = {
  title: "GENIEX Dashboard",
  description: "Educational platform dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <ThemeProvider defaultTheme="navy" storageKey="geniex-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
