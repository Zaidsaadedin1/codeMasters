"use client";
import React, { useState } from "react";
import Card from "./Card/Card";

interface CardData {
  src: string;
  text: string;
}

function ListOfCards() {
  const [cards, setCards] = useState<CardData[]>([
    { src: "website-image1.jpg", text: "Website Card 1" },
    { src: "website-image2.jpg", text: "Website Card 2" },
    { src: "website-image3.jpg", text: "Website Card 3" },
  ]);

  return (
    <>
      <section className="flex flex-row justify-around  mt-60">
        {cards.map((card, index) => (
          <Card key={index} src={card.src} text={card.text} />
        ))}
      </section>
    </>
  );
}

export default ListOfCards;
