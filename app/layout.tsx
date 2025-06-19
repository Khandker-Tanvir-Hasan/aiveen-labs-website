import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aiveen Labs - Healthcare Technology Solutions | Java, AWS, React & Vue.js',
  description: 'Specialized healthcare technology solutions with Java development, AWS cloud services, and React/Vue.js frontend expertise. Serving medical practices across the USA.',
  keywords: 'healthcare technology, Java development, AWS cloud solutions, React development, Vue.js, medical software, HIPAA compliance, healthcare IT, Spring Boot, microservices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 