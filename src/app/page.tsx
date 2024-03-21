"use client";
import { AlertProvider } from "@/Contexts/AlertContext";
import { AlertDataProvider } from "@/Contexts/AlertData";
import { BookNowModalProvider } from "@/Contexts/BookNowModal";
import Homepage from "@/components/HomePage/Homepage";
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head >
        <link rel="icon" href="./tabIcon.png" />
      </Head>
      <div className="bg-white">
        <BookNowModalProvider>
          <AlertDataProvider>
            <AlertProvider>
              <Homepage />
            </AlertProvider>
          </AlertDataProvider>
        </BookNowModalProvider>
      </div>
    </>
  );
}
