import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Payment Gateway Card',
    description: 'Página de pagamento com cartão de crédito',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="w-full min-h-screen lg:h-screen p-4 md:px-10 bg-bg-light bg-gradient-light dark:bg-secondary-900 dark:bg-gradient-dark flex items-center justify-center">
                    {children}
                </main>
            </body>
        </html>
    )
}
