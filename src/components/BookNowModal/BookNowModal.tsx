"use client";

import * as React from "react";
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

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "../ui/input";
import { useState } from "react";
import { useBookNowModal } from "@/Contexts/BookNowModal";
function BookNowModal() {
  const [startAtDate, setStartAtDate] = useState<Date>();
  const [deadLineDate, setDeadLineDate] = useState<Date>();
  const { openBookNowModal, setOpenBookNowModal } = useBookNowModal();

  return (
    <>
      <Drawer open={openBookNowModal}>
        <DrawerTrigger asChild>
          <Button variant="outline">Book Now</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Assest Form</DrawerTitle>
              <DrawerDescription>
                Fill This Form To request A Help In Your Projects
              </DrawerDescription>
            </DrawerHeader>
          </div>
          <div>
            {" "}
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !startAtDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startAtDate ? (
                      format(startAtDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startAtDate}
                    onSelect={setStartAtDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !deadLineDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {deadLineDate ? (
                      format(deadLineDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={deadLineDate}
                    onSelect={setDeadLineDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DrawerFooter>
            <Button>Book Now</Button>
            <DrawerClose asChild>
              <Button
                onClick={() => setOpenBookNowModal(!openBookNowModal)}
                variant="outline"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default BookNowModal;
