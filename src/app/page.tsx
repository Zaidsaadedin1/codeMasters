"use client";
import { AlertProvider } from "@/Contexts/AlertContext";
import { AlertDataProvider } from "@/Contexts/AlertData";
import { BookNowModalProvider } from "@/Contexts/BookNowModal";
import Homepage from "@/components/HomePage/Homepage";

export default function Home() {
  return (
    <>
      <BookNowModalProvider>
        <AlertDataProvider>
          <AlertProvider>
            <Homepage />
          </AlertProvider>
        </AlertDataProvider>
      </BookNowModalProvider>
    </>
  );
}
