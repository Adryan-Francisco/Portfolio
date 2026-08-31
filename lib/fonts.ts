import { Inter, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["Cascadia Code", "SFMono-Regular", "Consolas", "monospace"],
})

export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`
