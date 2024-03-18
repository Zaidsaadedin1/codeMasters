"use client";
import { Button } from "../ui/button";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import Image from "next/image";

function MainMenu() {
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();
  return (
    <div className="p-2">
      <menu className="font-mono w-max-[100%] flex flex-row justify-between items-center">
        <div className="flex items-center">
          <Image width={50} height={50} src={"/logo.png"} alt={"logo"} />
        </div>
        <Button
          className="text-black bg-white font-mono text-lg"
          onClick={() => setOpenBookNowModal(!openBookNowModal)}
        >
          قدم طلب
        </Button>
      </menu>
    </div>
  );
}
export default MainMenu;
