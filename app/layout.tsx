import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MacroGPT - AI-Powered Macro Tracking',
  description: 'Track your macros smarter with AI. Photo scanning, GROK-4 powered analysis, and personalized nutrition coaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

