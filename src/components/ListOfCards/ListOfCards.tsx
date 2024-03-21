import React, { useState } from "react";
import Card from "./Card/Card";
import Image from "next/image";
interface CardData {
  src: string;
  text: string;
}

function ListOfCards() {
  const [cards] = useState<CardData[]>([
    { src: "/ios.png", text: "IOS تطبيق هاتف " },
    { src: "/Web.png", text: "موقع الكتروني" },
    { src: "/android.png", text: "Android تطبيق هاتف " },
  ]);

  return (
    <>
      <section className="  m-0 flex flex-row justify-around flex-wrap bg-white  w-min-[480px]">
        {cards.map((card, index) => (
          <Card key={index} src={card.src} text={card.text} />
        ))}
      </section>
    </>
  );
}

export default ListOfCards;
