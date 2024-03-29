import * as React from "react";
import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useBookNowModal } from "@/Contexts/BookNowModal";
import { Textarea } from "../ui/textarea";
import { CreateOrder } from "@/Interfaces/Order/CreateOrderInterface";
import { fetchData } from "@/Apis/Apis";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAlertData } from "@/Contexts/AlertData";
import { useAlertModal } from "@/Contexts/AlertContext";
import { CardData, useCardsContext } from "@/Contexts/CardsContext ";

function BookNowModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("07");
  const [description, setDescription] = useState("");
  const [startAtDate, setStartAtDate] = useState<Date | undefined>();
  const [deadLineDate, setDeadLineDate] = useState<Date | undefined>();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    university: "",
    major: "",
    phoneNumber: "",
    description: "",
    startAtDate: "",
    deadLineDate: "",
  });
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();
  const { setAlertData } = useAlertData();
  const { setAlertModal } = useAlertModal();
  const { cards } = useCardsContext();

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setUniversity("");
    setMajor("");
    setPhoneNumber("");
    setDescription("");
    setStartAtDate(undefined);
    setDeadLineDate(undefined);
    setErrors(Errors);
  };

  const Errors = {
    firstName: "",
    lastName: "",
    university: "",
    major: "",
    phoneNumber: "",
    description: "",
    startAtDate: "",
    deadLineDate: "",
  };
  const setError = () => {
    if (!firstName) {
      Errors.firstName = "يرجى إدخال الاسم الأول.";
      return false;
    } else {
      Errors.firstName = "";
    }
    if (!lastName) {
      Errors.lastName = "يرجى إدخال اسم العائلة.";
      return false;
    } else {
      Errors.lastName = "";
    }
    if (!university) {
      Errors.university = "يرجى إدخال اسم الجامعة.";
      return false;
    } else {
      Errors.university = "";
    }

    if (!phoneNumber) {
      Errors.phoneNumber = "يرجى ادخال رقم الهاتف";
      return false;
    } else if (phoneNumber.length < 3) {
      Errors.phoneNumber = "يرجى ادخال رقم الهاتف";
      return false;
    } else if (isNaN(parseInt(phoneNumber)) || phoneNumber.length > 10) {
      Errors.phoneNumber = "يرجى ادخال رقم الهاتف  وان يكون من 10 خانات";
      return false;
    } else {
      Errors.phoneNumber = "";
    }
    if (!major) {
      Errors.major = "يرجى اختيار التخصص.";
      return false;
    } else {
      Errors.major = "";
    }
    if (!description) {
      Errors.description = "يرجى إدخال وصف.";
      return false;
    } else {
      Errors.description = "";
    }
    if (!startAtDate) {
      Errors.startAtDate = "يرجى اختيار تاريخ البدء.";
      return false;
    } else {
      Errors.startAtDate = "";
    }
    if (!deadLineDate) {
      Errors.deadLineDate = "يرجى اختيار تاريخ الموعد النهائي.";
      return false;
    } else {
      Errors.deadLineDate = "";
    }
    return true;
  };

  useEffect(() => {
    setError();
  }, [
    deadLineDate,
    startAtDate,
    description,
    phoneNumber,
    major,
    university,
    lastName,
    firstName,
  ]);

  const handleSubmit = async () => {
    const checkInputs = setError();
    if (checkInputs) {
      const newOrder: CreateOrder = {
        firstName,
        lastName,
        university,
        major,
        phoneNumber,
        description,
        createAt: new Date(),
        startAtDate: startAtDate,
        deadLineDate: deadLineDate,
      };
      try {
        const res = await fetchData.addOrder(newOrder);
        if (res.status === 200) {
          setOpenBookNowModal(false);
          setAlertData({
            alertDescription: " تم تقديم الطلب بنجاح",
            alertTitle: "تم ",
            status: 200,
          });
          setAlertModal(true);
          resetForm();
        } else {
          setOpenBookNowModal(false);
          setAlertData({
            alertDescription: "حدث خطأ غير متوقع: " + res.status,
            alertTitle: "خطأ",
            status: 400,
          });
          setAlertModal(true);
        }
      } catch (error) {
        setOpenBookNowModal(false);
        console.error("حدث خطأ أثناء إضافة الطلب:", error);
        setAlertData({
          alertDescription: " حدث خطأ أثناء إضافة الطلب ",
          alertTitle: "خطأ",
          status: 400,
        });
        setAlertModal(true);
      }
    } else {
      setErrors(Errors);
    }
  };

  return (
    <Drawer open={openBookNowModal}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col">
          <span dir="rtl" className="mt-2 text-2 p-0">
            الاسم الأول
          </span>
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="الاسم الأول"
            dir="rtl"
            className={`p-2 border ${
              errors.firstName ? "border-red-500" : "border"
            } radius-25 `}
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.firstName}
          </span>

          <span dir="rtl" className="mt-2 text-s p-0">
            اسم العائلة
          </span>
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="اسم العائلة"
            dir="rtl"
            className={`p-2 border ${
              errors.lastName ? "border-red-500" : "border"
            } radius-25 `}
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.lastName}
          </span>

          <span dir="rtl" className="mt-2 text-s p-0">
            اسم الجامعة
          </span>
          <input
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="اسم الجامعة"
            dir="rtl"
            className={`p-2 border ${
              errors.university ? "border-red-500" : "border"
            } radius-25 `}
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.university}
          </span>

          <span dir="rtl" className="mt-2 p-0 text-s">
            رقم الهاتف
          </span>
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="رقم الهاتف"
            dir="rtl"
            className={`p-2 border ${
              errors.phoneNumber ? "border-red-500" : "border"
            } radius-25 `}
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.phoneNumber}
          </span>

          <span dir="rtl" className="mt-2 p-0 text-s">
            المشروع
          </span>
          <select
            className={`flex justify-end border border-1 p-2 ${
              errors.major ? "border-red-500" : "border"
            }`}
            name="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            dir="rtl"
          >
            <option value="">نوع المشروع</option>
            {cards.map((card: CardData, index: number) => (
              <option key={index} value={card.text}>
                {card.text}
              </option>
            ))}
            <option value={"آخر"}>آخر</option>
          </select>
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.major}
          </span>

          <span dir="rtl" className="mt-2 p-0 text-s">
            وصف المشروع
          </span>
          <Textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="وصف لطلب المشروع"
            dir="rtl"
            className={`border border-black flex items-center ${
              errors.description ? "border-red-500" : "border"
            }`}
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.description}
          </span>

          <section dir="rtl" className="flex flex-col justify-end ">
            <div className="mt-2 flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !startAtDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startAtDate ? (
                      format(startAtDate, "PPP")
                    ) : (
                      <span className="pr-2">تاريخ بداية المشروع</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex w-auto flex-col space-y-2 p-2"
                >
                  <Select
                    onValueChange={(value) =>
                      setStartAtDate(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Tomorrow</SelectItem>
                      <SelectItem value="3">In 3 days</SelectItem>
                      <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={startAtDate}
                      onSelect={setStartAtDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <span dir="rtl" className="text-red-500 text-xs">
              {errors.startAtDate}
            </span>

            <div className="mt-2 flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !deadLineDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {deadLineDate ? (
                      format(deadLineDate, "PPP")
                    ) : (
                      <span className="pr-2">تاريخ تسليم المشروع</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex w-auto flex-col space-y-2 p-2"
                >
                  <Select
                    onValueChange={(value) =>
                      setDeadLineDate(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Tomorrow</SelectItem>
                      <SelectItem value="3">In 3 days</SelectItem>
                      <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={deadLineDate}
                      onSelect={setDeadLineDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <span dir="rtl" className="text-red-500 text-xs">
                {errors.deadLineDate}
              </span>
            </div>
          </section>
          <DrawerFooter className="flex flex-row justify-end">
            <Button
              className="bg-red-600 w-36"
              onClick={() => setOpenBookNowModal(!openBookNowModal)}
            >
              إلغاء
            </Button>
            <Button
              className="bg-white-600 w-36 text-black hover:border hover:border-2 hover:border-black hover:bg-white"
              onClick={handleSubmit}
            >
              قدم طلب
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default BookNowModal;
