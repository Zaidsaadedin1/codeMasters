import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookNowModalProvider } from "@/Contexts/BookNowModal";
import { AlertDataProvider } from "@/Contexts/AlertData";
import { AlertProvider } from "@/Contexts/AlertContext";
import { AuthProvider } from "@/Contexts/AuthProvider";
import Head from "next/head";
import { CardsProvider } from "@/Contexts/CardsContext ";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Masters",
  description: "Code Masters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <Head>
    <link rel="icon" href="./tabIcon.png" />
  </Head>;
  return (
    <html lang="en">
      <AuthProvider>
        <CardsProvider>
          <BookNowModalProvider>
            <AlertDataProvider>
              <AlertProvider>
                <body className={inter.className}>{children}</body>
              </AlertProvider>
            </AlertDataProvider>
          </BookNowModalProvider>
        </CardsProvider>
      </AuthProvider>
    </html>
  );
}
