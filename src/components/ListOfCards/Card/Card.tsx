import React, { useState } from "react";
import { Button } from "../../ui/button";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import Image from "next/image";
import "../Card.css";

interface CardProps {
  image: JSX.Element;
  text: string;
}

function Card({ image, text }: CardProps) {
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
          <div className="">{image}</div>
          <h1 className="card-text text-area ">{text}</h1>
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
