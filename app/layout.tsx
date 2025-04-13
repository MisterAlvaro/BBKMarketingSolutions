"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <html lang="en">
      <head>
          <title>Leading Digital Marketing Agency | BBK Marketing Solutions</title>
          <meta 
            name="description" 
            content="BBK Marketing Solutions: Top agency for SEO, social media, and web development. Guaranteed results for SMEs and enterprises. Free SEO audit + Success stories."
          />
          <meta 
            property="og:title" 
            content="Digital Marketing Agency | Proven Strategies 2024" 
          />
          <meta 
            property="og:description" 
            content="+150% organic traffic in 6 months. Experts in SEO, Google Ads, and social media management. Request your free consultation!" 
          />
      </head>
      <body>{children}</body>
    </html>
  )
}


