import React, { createContext, useContext, useState } from "react";

interface AlertData {
  alertDescription: string;
  alertTitle: string;
}

interface AlertContextType {
  alertData: AlertData;
  setAlertData: React.Dispatch<React.SetStateAction<AlertData>>;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlertData = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alertData, setAlertData] = useState<AlertData>({
    alertDescription: "",
    alertTitle: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
};
