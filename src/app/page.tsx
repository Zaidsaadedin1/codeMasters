"use client";
import { BookNowModalProvider } from "@/Contexts/BookNowModal";
import Homepage from "@/components/HomePage/Homepage";

export default function Home() {
  return (
    <>
      <BookNowModalProvider>
        <Homepage />
      </BookNowModalProvider>
    </>
  );
}
