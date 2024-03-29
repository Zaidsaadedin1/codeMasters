import React, { useState } from "react";
import Card from "./Card/Card";
import { useCardsContext } from "@/Contexts/CardsContext ";
import "./Card.css";

interface CardData {
  image: JSX.Element;
  text: string;
}

function ListOfCards() {
  const { cards } = useCardsContext();
  return (
    <>
      <section className="  m-0 flex flex-row justify-around flex-wrap bg-white  w-min-[480px]">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </section>
    </>
  );
}

export default ListOfCards;
