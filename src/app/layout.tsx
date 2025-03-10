import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ChatbotProvider } from '@/contexts/chatbot-context';
import Header from './_components/header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fintalk Chatbot',
  description: 'Created with ❤️ by Simão Freire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex flex-col items-center justify-start bg-slate-50 dark:bg-[#182A4C] h-[calc(100dvh-6rem)]">
          <ChatbotProvider>{children}</ChatbotProvider>
        </div>
      </body>
    </html>
  );
}
