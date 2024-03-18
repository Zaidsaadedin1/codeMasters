import * as React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "../ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
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
interface FormData {
  firstName: string;
  lastName: string;
  university: string;
  major: string;
  phoneNumber: number;
  description: string;
  startAtDate?: Date | undefined;
  deadLineDate?: Date | undefined;
}
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  university: "",
  major: "",
  phoneNumber: 0,
  description: "",
  startAtDate: undefined,
  deadLineDate: undefined,
};
function BookNowModal() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

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

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleDateSelect = (
    date: Date | undefined,
    field: "startAtDate" | "deadLineDate"
  ) => {
    setFormData({ ...formData, [field]: date });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = () => {
    let hasErrors = false;

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

    if (!formData.firstName) {
      newErrors.firstName = "يرجى إدخال الاسم الأول.";
      hasErrors = true;
    }

    if (!formData.lastName) {
      newErrors.lastName = "يرجى إدخال اسم العائلة.";
      hasErrors = true;
    }

    if (!formData.university) {
      newErrors.university = "يرجى إدخال اسم الجامعة.";
      hasErrors = true;
    }

    if (!formData.major) {
      newErrors.major = "يرجى اختيار التخصص.";
      hasErrors = true;
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "يرجى ادخال رقم الهاتف";
      hasErrors = true;
    }
    if (
      isNaN(formData.phoneNumber) ||
      formData.phoneNumber < 10 ||
      formData.phoneNumber > 10
    ) {
      newErrors.phoneNumber = "يرجى ادخال رقم الهاتف كرقم وان يكون من 10 خانات";
      hasErrors = true;
    }
    if (!formData.description) {
      newErrors.description = "يرجى إدخال وصف.";
      hasErrors = true;
    }

    if (!formData.startAtDate) {
      newErrors.startAtDate = "يرجى اختيار تاريخ البدء.";
      hasErrors = true;
    }

    if (!formData.deadLineDate) {
      newErrors.deadLineDate = "يرجى اختيار تاريخ الموعد النهائي.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      university: "",
      major: "",
      phoneNumber: 0,
      description: "",
      startAtDate: undefined,
      deadLineDate: undefined,
    });
  };

  return (
    <>
      <div className="flex m-[30px]">
        <Drawer open={openBookNowModal} onOpenChange={setOpenBookNowModal}>
          <DrawerTrigger asChild>
            <Button variant="outline">احجز الآن</Button>
          </DrawerTrigger>
          <DrawerContent className="p-2 w-max-[300px] h-max-[500px] flex justify-center">
            {/* Form inputs */}
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange(e)}
              placeholder="الاسم الأول"
              dir="rtl"
              className="mt-2 p-2"
            />
            <span dir="rtl" className="text-red-500">
              {errors.firstName}
            </span>

            <Input
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange(e)}
              placeholder="اسم العائلة"
              dir="rtl"
              className="mt-2 p-2"
            />
            <span dir="rtl" className="text-red-500">
              {errors.lastName}
            </span>

            <Input
              name="university"
              value={formData.university}
              onChange={(e) => handleInputChange(e)}
              placeholder="اسم الجامعة"
              dir="rtl"
              className="mt-2 p-2"
            />
            <span dir="rtl" className="text-red-500">
              {errors.university}
            </span>

            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => {
                handleInputChange(e);
              }}
              placeholder="رقم الهاتف"
              dir="rtl"
              className="mt-2 p-2"
            />
            <span dir="rtl" className="text-red-500">
              {errors.phoneNumber}
            </span>

            <select
              className="flex justify-end border border-1 mt-2 p-2"
              name="major"
              value={formData.major}
              onChange={(e) => handleInputChange(e)}
              dir="rtl"
            >
              <option value="">اختر التخصص</option>
              <option value="علوم الحاسوب">علوم الحاسوب</option>
              <option value="الهندسة">الهندسة</option>
            </select>
            <span dir="rtl" className="text-red-500">
              {errors.major}
            </span>
            <Textarea
              name="description"
              value={formData.description}
              onChange={(e) => handleInputChange(e)}
              placeholder="الوصف"
              dir="rtl"
              className="mt-2 mb-2 p-4 border border-black flex items-center"
            ></Textarea>

            <span dir="rtl" className="text-red-500">
              {errors.description}
            </span>

            {/* Date selection */}
            <section dir="rtl" className="flex flex-col  justify-end ">
              <div className=" mt-2 flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !formData.startAtDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startAtDate ? (
                        format(formData.startAtDate, "PPP")
                      ) : (
                        <span>تاريخ بداية المشروع </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startAtDate}
                      onSelect={(date) => handleDateSelect(date, "startAtDate")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <span dir="rtl" className="text-red-500">
                  {errors.startAtDate}
                </span>
              </div>
              <div className="mt-2 flex flex-col">
                <Popover>
                  <PopoverTrigger asChild dir="rtl">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !formData.deadLineDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.deadLineDate ? (
                        format(formData.deadLineDate, "PPP")
                      ) : (
                        <span>تاريخ تسليم المشروع </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.deadLineDate}
                      onSelect={(date) =>
                        handleDateSelect(date, "deadLineDate")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <span dir="rtl" className="text-red-500">
                  {errors.deadLineDate}
                </span>
              </div>
            </section>
            {/* Form actions */}
            <DrawerFooter>
              <Button onClick={handleSubmit}>قدم طلب</Button>
              <DrawerClose asChild>
                <Button
                  onClick={() => setOpenBookNowModal(!openBookNowModal)}
                  variant="outline"
                >
                  إلغاء
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default BookNowModal;
