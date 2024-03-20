import { useEffect } from "react"; // Import useEffect hook
import { useBookNowModal } from "@/Contexts/BookNowModal";
import BookNowModal from "../BookNowModal/BookNowModal";
import ListOfCards from "../ListOfCards/ListOfCards";
import MainMenu from "../MainMenu/MainMenu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import MainText from "../MainText/MainText";
import { useAlertModal } from "@/Contexts/AlertContext";
import { useAlertData } from "@/Contexts/AlertData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Homepage() {
  const { openBookNowModal } = useBookNowModal();
  const { alertModal, setAlertModal } = useAlertModal();
  const { alertData } = useAlertData();

  const handleToast = () => {
    toast.success(
      <>
        <h1 className="font-black" dir="rtl">
          {alertData.alertTitle}
        </h1>
        <br />
        <h4 className="font-black" dir="rtl">
          {alertData.alertDescription}
        </h4>
      </>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setAlertModal(false);
  };

  useEffect(() => {
    if (alertModal) {
      handleToast();
    }
  }, [
    alertModal,
    alertData.alertTitle,
    alertData.alertDescription,
    setAlertModal,
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col min-h-screen">
        <header>
          <section className="bg-black">
            <MainMenu />
          </section>
        </header>
        <MainText />
        <header className="border border-gray-400 mt-1">
          <ListOfCards />
        </header>
        <footer className="flex flex-row justify-around items-center p-3 flex-wrap">
          <a
            className="flex flex-row justify-center items-center font-mono m-2"
            href="https://www.instagram.com/codemastersjo/"
          >
            <IoLogoInstagram />
            codemastersjo
          </a>
          <h3 className="flex flex-row justify-around items-center font-mono m-2">
            <CiPhone />
            0782739761
          </h3>
          <a
            className="flex flex-row justify-center items-center font-mono m-2"
            href="https://www.facebook.com/Codemastersjo/"
          >
            <FaFacebook />
            codemastersjo
          </a>
        </footer>
        {openBookNowModal && (
          <div className="flex justify-center">
            <BookNowModal />
          </div>
        )}
      </div>
    </>
  );
}

export default Homepage;
