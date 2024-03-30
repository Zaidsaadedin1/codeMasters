import { motion } from "framer-motion";
import Animations from "./Animations";

function MainText() {
  return (
    <div className="bg-white flex flex-row  flex-wrap justify-end p-5">
      <section className="animation "></section>
      <section className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-black text-right"
        >
          <h1 className="font-mono text-3xl font-bold tracking-wide mb-5 flex flex-row justify-end items-center">
            احنا موجودين عشان نساعدك تتعدى التحديات في مسيرتك الجامعية
          </h1>
          <h2 className="text-2xl leading-relaxed font-mono">
            عم تدرس منقدر انساعدك ونقدملك مشاريع تخرج واعداد الاوراق النقاشية
            <br />
            او دروس خصوصية وبحوث علمية وخدمات مختلفة إحنا هون عشان ندعمكم
            <br />
            <span className="text-2xl font-mono text-red-400">
              قدم طلب لنساعدك في مشوارك
            </span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
}

export default MainText;
