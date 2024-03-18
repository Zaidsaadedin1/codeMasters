// Import necessary components
import { useBookNowModal } from "@/Contexts/BookNowModal";
import BookNowModal from "../BookNowModal/BookNowModal";
import ListOfCards from "../ListOfCards/ListOfCards";
import MainMenu from "../MainMenu/MainMenu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import MainText from "../MainText/MainText";
function Homepage() {
  const { openBookNowModal } = useBookNowModal();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <section className="bg-black">
            <MainMenu />
          </section>
        </header>
        <MainText />
        <header className="border border-gray-400 mt-1 ">
          <ListOfCards />
        </header>
        <footer className="flex flex-row justify-around  items-center p-3 flex-wrap">
          <a
            className="flex flex-row justify-center  items-center font-mono m-2"
            href="https://www.instagram.com/codemastersjo/"
          >
            <IoLogoInstagram />
            codemastersjo
          </a>
          <h3 className="flex flex-row justify-around  items-center font-mono m-2">
            <CiPhone />
            0782739761
          </h3>
          <a
            className="flex flex-row justify-center  items-center font-mono m-2"
            href="https://www.facebook.com/Codemastersjo/"
          >
            {" "}
            <FaFacebook />
            codemastersjo
          </a>
        </footer>
      </div>
      <div className="flex justify-center items-center ">
        {openBookNowModal && <BookNowModal />}
      </div>
    </>
  );
}

export default Homepage;
