import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import './globals.css';

export const locales = ['fa', 'en', 'ar'] as const;
export type Locale = typeof locales[number];

export const metadata: Metadata = {
  title: 'IRAN SELECT | Premium Iranian Products',
  description: 'Discover carefully selected Iranian saffron, nuts, dried fruits, dates and traditional sweets for global markets.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();
  const dir = locale === 'en' ? 'ltr' : 'rtl';
  const fontClass = locale === 'fa' ? 'font-fa' : locale === 'ar' ? 'font-ar' : 'font-sans';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${fontClass} bg-ivory text-ink antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
