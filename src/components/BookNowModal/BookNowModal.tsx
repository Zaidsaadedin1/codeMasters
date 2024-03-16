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
  description: string;
  startAtDate?: Date | undefined;
  deadLineDate?: Date | undefined;
}
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  university: "",
  major: "",
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
      description: "",
      startAtDate: undefined,
      deadLineDate: undefined,
    });
  };

  return (
    <>
      <div className="h-min-[300px] w-min-[100%]">
        <Drawer open={openBookNowModal} onOpenChange={setOpenBookNowModal}>
          <DrawerTrigger asChild>
            <Button variant="outline">احجز الآن</Button>
          </DrawerTrigger>
          <DrawerContent>
            {/* Form inputs */}
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange(e)}
              placeholder="الاسم الأول"
              dir="rtl"
              className="m-2"
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
              className="m-2"
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
              className="m-2"
            />
            <span dir="rtl" className="text-red-500">
              {errors.university}
            </span>

            <select
              className="flex justify-end m2 border border-1 p-1"
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
              placeholder="وصف"
              dir="rtl"
              className="mt-2 mb-2 border border-1"
            ></Textarea>

            <span dir="rtl" className="text-red-500">
              {errors.description}
            </span>

            {/* Date selection */}
            <section className="flex flex-row justify-end">
              <div className="m-2 flex flex-col">
                <Popover>
                  <PopoverTrigger asChild dir="rtl">
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
              <div className="m-2 flex flex-col">
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
