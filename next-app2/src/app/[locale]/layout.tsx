// import { Inter } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";

import Providers from "../providers/Providers";
import { Toaster } from "../../../@/components/ui/toaster";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { I18nProviderClient } from "../locales/client";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface PageProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: PageProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <I18nProviderClient locale={locale}>
              <main> {children}</main>
            </I18nProviderClient>
          </ReactQueryProvider>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
