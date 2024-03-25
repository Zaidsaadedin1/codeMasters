"use client"
import React, { createContext, useContext, useState } from "react";

interface AlertModalContextType {
  alertModal: boolean;
  setAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertContext = createContext<AlertModalContextType | undefined>(
  undefined
);

export const useAlertModal = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("AlertContext must be used within a AlertProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const AlertProvider: React.FC<Props> = ({ children }) => {
  const [alertModal, setAlertModal] = useState<boolean>(false); // Changed variable name to lowercase

  return (
    <AlertContext.Provider value={{ alertModal, setAlertModal }}>
      {children}
    </AlertContext.Provider>
  );
};
