"use client";
import React, { createContext, useContext, useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaMobile, FaRegChartBar, FaRemoveFormat } from "react-icons/fa";
import { CiLaptop } from "react-icons/ci";
import { CiCalculator2 } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { SiMicrosoftsqlserver, SiProbot } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";
import { MdOutlineAppSettingsAlt, MdOutlineBiotech } from "react-icons/md";
import { BsHddNetwork } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { CiDatabase } from "react-icons/ci";
import { RiDatabaseLine, RiSpeakLine } from "react-icons/ri";
import { MdDraw } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import {
  GiDoctorFace,
  GiFilmSpool,
  GiRoundTable,
  GiWorld,
} from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { CiPlane } from "react-icons/ci";
import { FaChair } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoIosNuclear } from "react-icons/io";
import { PiEngineBold, PiSigmaThin } from "react-icons/pi";
import { GiTreeBranch } from "react-icons/gi";
import { TbMath } from "react-icons/tb";
import { FcBiotech, FcSmartphoneTablet } from "react-icons/fc";
import { GiStonePile } from "react-icons/gi";
import { FaDna } from "react-icons/fa6";

// Define the type for CardData
export interface CardData {
  image: JSX.Element;
  text: string;
}

// Define the type for the context
export interface CardsContextType {
  cards: CardData[];
}

// Create the context
export const CardsContext = createContext<CardsContextType | undefined>(
  undefined
);

// Define a custom hook to use the context
export function useCardsContext() {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }
  return context;
}
interface Props {
  children: React.ReactNode;
}
// Define a provider component
export const CardsProvider: React.FC<Props> = ({ children }) => {
  const [cards] = useState<CardData[]>([
    {
      image: <CiMobile3 className="imageIcon text-blue-400" />,
      text: "IOS تطبيق هاتف",
    },
    {
      image: <CiLaptop className="imageIcon text-gray-400" />,
      text: "موقع الكتروني",
    },
    {
      image: <FcSmartphoneTablet className="imageIcon text-green-600" />,
      text: "Android تطبيق هاتف",
    },
    {
      image: <CiCalculator2 className="imageIcon text-orange-600" />,
      text: "مشروع تخرج تخصص المحاسبة",
    },
    {
      image: <GoLaw className="imageIcon text-gray-600" />,
      text: "مشروع تخرج تخصص القانون",
    },
    {
      image: <HiOutlineSpeakerphone className="imageIcon text-green-600" />,
      text: "مشروع تخرج تخصص التسويق الالكتروني",
    },
    {
      image: <FaUserDoctor className="imageIcon text-purple-500	" />,
      text: "مشروع تخرج تخصص الأرشاد النفسي",
    },
    {
      image: <SiProbot className="imageIcon text-indigo-500	" />,
      text: "مشروع تخرج تخصص الذكاء الاصطناعي",
    },
    {
      image: <FaNetworkWired className="imageIcon text-cyan-900	" />,
      text: "مشروع تخرج تخصص تقنية المعلومات",
    },
    {
      image: <LuAppWindow className="imageIcon text-lime-500	" />,
      text: "مشروع تخرج تخصص علوم الحاسوب",
    },
    {
      image: <MdOutlineAppSettingsAlt className="imageIcon text-yellow-900	" />,
      text: "مشروع تخرج تخصص هندسة البرمجيات",
    },
    {
      image: <BsHddNetwork className="imageIcon text-amber-700	" />,
      text: "مشروع تخرج تخصص الاتصالات السلكية واللاسلكية",
    },
    {
      image: <LiaNetworkWiredSolid className="imageIcon text-orange-900	" />,
      text: "مشروع تخرج تخصص هندسة الشبكات",
    },
    {
      image: <CiDatabase className="imageIcon text-red-800	" />,
      text: "مشروع تخرج تخصص علوم البيانات",
    },
    {
      image: <RiDatabaseLine className="imageIcon text-orange-300	" />,
      text: "مشروع تخرج تخصص تحليل البيانات",
    },
    {
      image: <MdDraw className="imageIcon text-red-500	" />,
      text: "مشروع تخرج تخصص تصميم الجرافيك",
    },
    {
      image: <CgGames className="imageIcon text-red-700	" />,
      text: "مشروع تخرج تخصص تصميم وتطوير الألعاب",
    },
    {
      image: <GiDoctorFace className="imageIcon text-pink-500	" />,
      text: "مشروع تخرج تخصص علم النفس",
    },
    {
      image: <FaChild className="imageIcon text-rose-600	" />,
      text: "مشروع تخرج تخصص التربية الخاصة",
    },
    {
      image: <CiPlane className="imageIcon text-lime-400	" />,
      text: "مشروع تخرج تخصص السياحة والسفر",
    },
    {
      image: <FaChair className="imageIcon text-orange-400	" />,
      text: "مشروع تخرج تخصص التصميم الداخلي",
    },
    {
      image: <FaRegBuilding className="imageIcon text-purple-500	" />,
      text: "مشروع تخرج تخصص الهندسة المعمارية",
    },
    {
      image: <MdOutlineBuild className="imageIcon text-indigo-500	" />,
      text: "مشروع تخرج تخصص الهندسة الصناعية",
    },
    {
      image: <MdOutlineElectricBolt className="imageIcon text-cyan-500	" />,
      text: "مشروع تخرج تخصص هندسة الكهرباء والالكترونيات",
    },
    {
      image: <IoIosNuclear className="imageIcon text-teal-600	" />,
      text: "مشروع تخرج تخصص هندسة الطاقة",
    },
    {
      image: <PiEngineBold className="imageIcon text-rose-500	" />,
      text: "مشروع تخرج تخصص الهندسة الميكانيكية",
    },
    {
      image: <GiTreeBranch className="imageIcon text-teal-800	" />,
      text: "مشروع تخرج تخصص الهندسة البيئية",
    },
    {
      image: <TbMath className="imageIcon text-teal-300	" />,
      text: "مشروع تخرج تخصص الرياضيات",
    },
    {
      image: <FaRemoveFormat className="imageIcon text-purple-950	" />,
      text: "مشروع تخرج تخصص الفيزياء",
    },
    {
      image: <MdOutlineBiotech className="imageIcon text-purple-300	" />,

      text: "مشروع تخرج تخصص الكيمياء",
    },
    {
      image: <FcBiotech className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الاحياء",
    },
    {
      image: <SiMicrosoftsqlserver className="imageIcon text-neutral-700	" />,
      text: "مشروع تخرج تخصص البيولوجيا الدقيقة والجزيئية",
    },
    {
      image: <FaDna className="imageIcon text-yellow-500	" />,
      text: "مشروع تخرج تخصص علم الوراثة",
    },
    {
      image: <GiStonePile className="imageIcon text-lime-100	" />,
      text: "مشروع تخرج تخصص الجيولوجيا",
    },
    {
      image: <GiWorld className="imageIcon text-lime-800	" />,
      text: "مشروع تخرج تخصص الجغرافيا",
    },
    {
      image: <FaRegChartBar className="imageIcon text-violet-950	" />,
      text: "مشروع تخرج تخصص علم الاقتصاد",
    },
    {
      image: <PiSigmaThin className="imageIcon text-teal-700	" />,
      text: "مشروع تخرج تخصص علم الإحصاء",
    },
    {
      image: <GiRoundTable className="imageIcon text-red-500	" />,
      text: "مشروع تخرج تخصص العلوم السياسية",
    },
    {
      image: <RiSpeakLine className="imageIcon text-red-700	" />,
      text: "مشروع تخرج تخصص علم الاجتماع",
    },
    {
      image: <GiFilmSpool className="imageIcon text-rose-500	" />,
      text: "مشروع تخرج تخصص الصحافة والإعلام",
    },
  ]);

  return (
    <CardsContext.Provider value={{ cards }}>{children}</CardsContext.Provider>
  );
};
