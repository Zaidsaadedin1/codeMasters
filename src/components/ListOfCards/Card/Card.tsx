import React, { useState } from "react";
import { Button } from "../../ui/button";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import Image from "next/image";
import "./Card.css";

interface CardProps {
  src: string;
  text: string;
}

function Card({ src, text }: CardProps) {
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="m-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <div className="card-front">
          <Image width={250} height={200} src={src} alt={text} />
          <h1 className="text-xl font-mono  ">{text}</h1>
        </div>
      ) : (
        <div className="card-back font-mono">
          <Button onClick={() => setOpenBookNowModal(!openBookNowModal)}>
            قدم طلب
          </Button>
        </div>
      )}
    </div>
  );
}

export default Card;
