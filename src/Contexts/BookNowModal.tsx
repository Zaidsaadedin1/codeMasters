import React, { createContext, useContext, useState } from "react";

// Define a type for the context value
interface BookNowModalContextType {
  openBookNowModal: boolean;
  setOpenBookNowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const BookNowModalContext = createContext<BookNowModalContextType | undefined>(
  undefined
);

// Create a custom hook to use the context
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

// Create a provider component
export const BookNowModalProvider: React.FC<Props> = ({ children }) => {
  const [openBookNowModal, setOpenBookNowModal] = useState<boolean>(false);

  // Wrap the children with the context provider
  return (
    <BookNowModalContext.Provider
      value={{ openBookNowModal, setOpenBookNowModal }}
    >
      {children}
    </BookNowModalContext.Provider>
  );
};
