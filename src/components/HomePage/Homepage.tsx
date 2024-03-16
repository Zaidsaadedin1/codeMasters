// Import necessary components
import { useBookNowModal } from "@/Contexts/BookNowModal";
import BookNowModal from "../BookNowModal/BookNowModal";
import ListOfCards from "../ListOfCards/ListOfCards";
import MainMenu from "../MainMenu/MainMenu";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiPhone } from "react-icons/ci";

function Homepage() {
  const { openBookNowModal } = useBookNowModal();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <MainMenu />
      </header>
      <div className="h-max-[600px] bg-black p-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" flex flex-col items-end justify-center px-5 text-white text-right"
        >
          <h1 className=" font-mono text-3xl font-bold tracking-wide mb-5">
            !! احنا موجودين عشان نساعدك تتعدى التحديات في عالم البرمجة
          </h1>
          <h2 className="text-2xl leading-relaxed font-mono">
            سواء كنت بتدرّب أو عم تدرس منقدر انساعدك ونقدملك خدمات مواقع الويب،
            أو تطبيقات الهاتف وخدمات مختلفه <br />
            إحنا هون عشان ندعمكم! فريقنا جاهز. من الإستشارات ومساعدات من ذوي
            الخبرة
            <br></br>
            <span className="text-2xl font-mono">
              {" "}
              قدم طلب لنساعدك في مشاريعك
            </span>
          </h2>
        </motion.div>
      </div>
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
      <footer className="flex justify-end">
        {openBookNowModal && <BookNowModal />}
      </footer>
    </div>
  );
}

export default Homepage;
