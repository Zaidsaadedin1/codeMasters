import { motion } from "framer-motion";
import Animations from "./Animations";

function MainText() {
  return (
    <div className="bg-white flex flex-row  flex-wrap justify-end pt-2">
      <section className="animation "></section>
      <section className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-black text-right"
        >
          <h3 className="font-mono text-3xl font-bold tracking-wide mb-5 flex flex-row justify-end items-center">
            احنا موجودين عشان نساعدك تتعدى التحديات في عالم البرمجة
          </h3>
          <h4 className="text-2xl leading-relaxed font-mono">
            عم تدرس منقدر انساعدك ونقدملك خدمات مواقع الويب أو تطبيقات الهاتف او
            دروس خصوصية وخدمات مختلفة إحنا هون عشان ندعمكم!
            <span className="text-2xl font-mono">
              قدم طلب لنساعدك في مشاريعك او في اعطائك دروس خصوصية
            </span>
          </h4>
        </motion.div>
      </section>
    </div>
  );
}

export default MainText;
