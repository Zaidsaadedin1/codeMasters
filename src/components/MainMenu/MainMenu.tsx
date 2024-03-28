"use client";
import { Button } from "../ui/button";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import Image from "next/image";
import { redirect } from "next/navigation";

function MainMenu() {
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();

  return (
    <div className="p-2 bg-white p-3">
      <menu className="font-mono w-max-[100%] flex flex-row justify-between items-center">
        <div className="flex items-center">
          <Image
            onClick={(e) => {
              redirect("/home");
            }}
            color="black"
            width={50}
            height={50}
            src={"/blackLogo.png"}
            alt={"logo"}
          />
        </div>
        <Button
          className="text-white bg-black font-mono text-lg"
          onClick={() => setOpenBookNowModal(!openBookNowModal)}
        >
          قدم طلب
        </Button>
      </menu>
    </div>
  );
}
export default MainMenu;
