import './globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { AllLocales } from '@/utils/AppConfig';

import { ThemeProvider } from '../../providers/theme-provider';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate that the incoming `locale` parameter is valid
  if (!AllLocales.includes(params.locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
