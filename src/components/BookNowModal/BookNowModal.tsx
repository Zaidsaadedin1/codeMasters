import * as React from "react";
import { useState } from "react";
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
} from "@/components/ui/drawer"
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { alertData, setAlertData } = useAlertData();
  const { setAlertModal } = useAlertModal();

  const handleSubmit = async () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      university: "",
      major: "",
      phoneNumber: "",
      description: "",
      startAtDate: "",
      deadLineDate: "",
    };

    if (!firstName) {
      newErrors.firstName = "يرجى إدخال الاسم الأول.";
    }

    if (!lastName) {
      newErrors.lastName = "يرجى إدخال اسم العائلة.";
    }

    if (!university) {
      newErrors.university = "يرجى إدخال اسم الجامعة.";
    }

    if (!major) {
      newErrors.major = "يرجى اختيار التخصص.";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "يرجى ادخال رقم الهاتف";
    } else if (phoneNumber.length < 3) {
      newErrors.phoneNumber = "يرجى ادخال رقم الهاتف";
    } else if (isNaN(parseInt(phoneNumber)) || phoneNumber.length > 10) {
      newErrors.phoneNumber = "يرجى ادخال رقم الهاتف  وان يكون من 10 خانات";
    }

    if (!description) {
      newErrors.description = "يرجى إدخال وصف.";
    }

    if (!startAtDate) {
      newErrors.startAtDate = "يرجى اختيار تاريخ البدء.";
    }

    if (!deadLineDate) {
      newErrors.deadLineDate = "يرجى اختيار تاريخ الموعد النهائي.";
    }

    if (Object.values(newErrors).every((error) => !error)) {
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

      setFirstName("");
      setLastName("");
      setUniversity("");
      setMajor("");
      setPhoneNumber("");
      setDescription("");
      setStartAtDate(undefined);
      setDeadLineDate(undefined);
      setErrors(newErrors);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Drawer open={openBookNowModal}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col">
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="الاسم الأول"
            dir="rtl"
            className="mt-2 p-2"
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.firstName}
          </span>

          <input

            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="اسم العائلة"
            dir="rtl"
            className="mt-2 p-2"
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.lastName}
          </span>

          <input
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="اسم الجامعة"
            dir="rtl"
            className="mt-2 p-2"
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.university}
          </span>

          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="رقم الهاتف"
            dir="rtl"
            className="mt-2 p-2"
          />
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.phoneNumber}
          </span>

          <select
            className="flex justify-end border border-1 mt-2 p-2"
            name="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            dir="rtl"
          >
            <option value="">اختر التخصص</option>
            <option value="علوم الحاسوب">علوم الحاسوب</option>
            <option value="هندسة الحاسوب">هندسة الحاسوب</option>
            <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
            <option value="تطوير البرمجيات">تطوير البرمجيات</option>
            <option value="تصميم الواجهات الرسومية">
              تصميم الواجهات الرسومية
            </option>
            <option value="أمن المعلومات">أمن المعلومات</option>
            <option value="تحليل البيانات">تحليل البيانات</option>
            <option value="الذكاء الاصطناعي">الذكاء الاصطناعي</option>
            <option value="تطبيقات الويب">تطبيقات الويب</option>
            <option value="تطوير الألعاب">تطوير الألعاب</option>
          </select>
          <span dir="rtl" className="text-red-500 text-xs">
            {errors.major}
          </span>

          <Textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="وصف لطلب المشروع"
            dir="rtl"
            className="mt-2  p-4 border border-black flex items-center"
          ></Textarea>
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
    </Drawer >
  );
}

export default BookNowModal;
