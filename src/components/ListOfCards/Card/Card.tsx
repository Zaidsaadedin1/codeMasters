`use client`;
import React from "react";
import { Button } from "../../ui/button";

interface CardProps {
  src: string;
  text: string;
}

function Card({ src, text }: CardProps) {
  return (
    <div>
      <section className="w-[300px] flex flex-col justify-center items-center">
        <img src={src} alt={text} />
        <p>{text}</p>
        <Button>Book Now</Button>
      </section>
    </div>
  );
}

export default Card;
