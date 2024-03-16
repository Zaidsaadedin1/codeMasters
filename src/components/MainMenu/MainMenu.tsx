"use client";
import { Button } from "../ui/button";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import Image from "next/image";

function MainMenu() {
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();
  return (
    <div className="p-2">
      <menu className=" font-mono flex flex-row justify-between items-center">
        <Image width={50} height={50} src={"/logo.png"} alt={"logo"} />
        <Button onClick={() => setOpenBookNowModal(!openBookNowModal)}>
          قدم طلب
        </Button>
      </menu>
    </div>
  );
}
export default MainMenu;
