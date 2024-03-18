import { motion } from "framer-motion";
import Animations from "./Animations";

function MainText() {
  return (
    <div className="bg-black flex flex-row  flex-wrap justify-end p-5">
      <section className="animation ">
        <Animations />
      </section>
      <section className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-white text-right"
        >
          <h1 className="font-mono text-3xl font-bold tracking-wide mb-5">
            !! احنا موجودين عشان نساعدك تتعدى التحديات في عالم البرمجة
          </h1>
          <h2 className="text-2xl leading-relaxed font-mono">
            سواء كنت بتدرّب أو عم تدرس منقدر انساعدك ونقدملك خدمات مواقع الويب،
            <br />
            أو تطبيقات الهاتف وخدمات مختلفه <br />
            إحنا هون عشان ندعمكم! فريقنا جاهز. من الإستشارات ومساعدات من ذوي
            الخبرة
            <br></br>
            <span className="text-2xl font-mono">
              قدم طلب لنساعدك في مشاريعك
            </span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
}

export default MainText;
