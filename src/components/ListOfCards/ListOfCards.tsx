import React, { useState } from "react";
import Card from "./Card/Card";
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
import "./Card.css";

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

interface CardData {
  image: JSX.Element;
  text: string;
}

function ListOfCards() {
  const [cards] = useState<CardData[]>([
    { image: <CiMobile3 className="imageIcon" />, text: "IOS تطبيق هاتف" },
    { image: <CiLaptop className="imageIcon" />, text: "موقع الكتروني" },
    {
      image: <FcSmartphoneTablet className="imageIcon" />,
      text: "Android تطبيق هاتف",
    },
    {
      image: <CiCalculator2 className="imageIcon" />,
      text: "مشروع تخرج تخصص المحاسبة",
    },
    { image: <GoLaw className="imageIcon" />, text: "مشروع تخرج تخصص القانون" },
    {
      image: <HiOutlineSpeakerphone className="imageIcon" />,
      text: "مشروع تخرج تخصص التسويق الالكتروني",
    },
    {
      image: <FaUserDoctor className="imageIcon" />,
      text: "مشروع تخرج تخصص الأرشاد النفسي",
    },
    {
      image: <SiProbot className="imageIcon" />,
      text: "مشروع تخرج تخصص الذكاء الاصطناعي",
    },
    {
      image: <FaNetworkWired className="imageIcon" />,
      text: "مشروع تخرج تخصص تقنية المعلومات",
    },
    {
      image: <LuAppWindow className="imageIcon" />,
      text: "مشروع تخرج تخصص علوم الحاسوب",
    },
    {
      image: <MdOutlineAppSettingsAlt className="imageIcon" />,
      text: "مشروع تخرج تخصص هندسة البرمجيات",
    },
    {
      image: <BsHddNetwork className="imageIcon" />,
      text: "مشروع تخرج تخصص الاتصالات السلكية واللاسلكية",
    },
    {
      image: <LiaNetworkWiredSolid className="imageIcon" />,
      text: "مشروع تخرج تخصص هندسة الشبكات",
    },
    {
      image: <CiDatabase className="imageIcon" />,
      text: "مشروع تخرج تخصص علوم البيانات",
    },
    {
      image: <RiDatabaseLine className="imageIcon" />,
      text: "مشروع تخرج تخصص تحليل البيانات",
    },
    {
      image: <MdDraw className="imageIcon" />,
      text: "مشروع تخرج تخصص تصميم الجرافيك",
    },
    {
      image: <CgGames className="imageIcon" />,
      text: "مشروع تخرج تخصص تصميم وتطوير الألعاب",
    },
    {
      image: <GiDoctorFace className="imageIcon" />,
      text: "مشروع تخرج تخصص علم النفس",
    },
    {
      image: <FaChild className="imageIcon" />,
      text: "مشروع تخرج تخصص التربية الخاصة",
    },
    {
      image: <CiPlane className="imageIcon" />,
      text: "مشروع تخرج تخصص السياحة والسفر",
    },
    {
      image: <FaChair className="imageIcon" />,
      text: "مشروع تخرج تخصص التصميم الداخلي",
    },
    {
      image: <FaRegBuilding className="imageIcon" />,
      text: "مشروع تخرج تخصص الهندسة المعمارية",
    },
    {
      image: <MdOutlineBuild className="imageIcon" />,
      text: "مشروع تخرج تخصص الهندسة الصناعية",
    },
    {
      image: <MdOutlineElectricBolt className="imageIcon" />,
      text: "مشروع تخرج تخصص هندسة الكهرباء والالكترونيات",
    },
    {
      image: <IoIosNuclear className="imageIcon" />,
      text: "مشروع تخرج تخصص هندسة الطاقة",
    },
    {
      image: <PiEngineBold className="imageIcon" />,
      text: "مشروع تخرج تخصص الهندسة الميكانيكية",
    },
    {
      image: <GiTreeBranch className="imageIcon" />,
      text: "مشروع تخرج تخصص الهندسة البيئية",
    },
    {
      image: <TbMath className="imageIcon" />,
      text: "مشروع تخرج تخصص الرياضيات",
    },
    {
      image: <FaRemoveFormat className="imageIcon" />,
      text: "مشروع تخرج تخصص الفيزياء",
    },
    {
      image: <FcBiotech className="imageIcon" />,
      text: "مشروع تخرج تخصص الكيمياء",
    },
    {
      image: <MdOutlineBiotech className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الاحياء",
    },
    {
      image: <SiMicrosoftsqlserver className="imageIcon" />,
      text: "مشروع تخرج تخصص البيولوجيا الدقيقة والجزيئية",
    },
    {
      image: <FaDna className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الوراثة",
    },
    {
      image: <GiStonePile className="imageIcon" />,
      text: "مشروع تخرج تخصص الجيولوجيا",
    },
    {
      image: <GiWorld className="imageIcon" />,
      text: "مشروع تخرج تخصص الجغرافيا",
    },
    {
      image: <FaRegChartBar className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الاقتصاد",
    },
    {
      image: <PiSigmaThin className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الإحصاء",
    },
    {
      image: <GiRoundTable className="imageIcon" />,
      text: "مشروع تخرج تخصص العلوم السياسية",
    },
    {
      image: <RiSpeakLine className="imageIcon" />,
      text: "مشروع تخرج تخصص علم الاجتماع",
    },
    {
      image: <GiFilmSpool className="imageIcon" />,
      text: "مشروع تخرج تخصص الصحافة والإعلام",
    },
  ]);

  return (
    <>
      <section className="  m-0 flex flex-row justify-around flex-wrap bg-white  w-min-[480px]">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </section>
    </>
  );
}

export default ListOfCards;
