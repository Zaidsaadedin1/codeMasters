import React, { createContext, useContext, useState } from "react";

interface BookNowModalContextType {
  openBookNowModal: boolean;
  setOpenBookNowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookNowModalContext = createContext<BookNowModalContextType | undefined>(
  undefined
);

export const useBookNowModal = () => {
  const context = useContext(BookNowModalContext);
  if (!context) {
    throw new Error(
      "useBookNowModal must be used within a BookNowModalProvider"
    );
  }
  return context;
};
interface Props {
  children: React.ReactNode;
}

export const BookNowModalProvider: React.FC<Props> = ({ children }) => {
  const [openBookNowModal, setOpenBookNowModal] = useState<boolean>(false);

  return (
    <BookNowModalContext.Provider
      value={{ openBookNowModal, setOpenBookNowModal }}
    >
      {children}
    </BookNowModalContext.Provider>
  );
};
