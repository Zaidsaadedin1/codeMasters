import { motion } from "framer-motion";
import { useBookNowModal } from "@/Contexts/BookNowModal";

function MainText() {
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();

  return (
    <section className="flex justify-center flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
        className="flex flex-col text-black "
      >
        <h1
          dir="rtl"
          className="font-sans text-4xl font-bold tracking-wide mb-2"
        >
          احنا موجودين عشان نساعدك تتعدى التحديات في مسيرتك الجامعية
        </h1>
        <div dir="rtl" className="flex justify-center flex-col items-center">
          <h2 className="text-3xl font-sans">
            عم تدرس منقدر انساعدك ونقدملك مشاريع تخرج واعداد الاوراق النقاشية
          </h2>
          <h2 dir="rtl" className="text-2xl font-sans">
            او دروس خصوصية وبحوث علمية وخدمات مختلفة إحنا هون عشان ندعمكم
          </h2>
          <button
            dir="rtl"
            onClick={() => setOpenBookNowModal(!openBookNowModal)}
            className="text-xl font-serif text-red-600"
          >
            قدم طلب لنساعدك في مشوارك
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default MainText;
