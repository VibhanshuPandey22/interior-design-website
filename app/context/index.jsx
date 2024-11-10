"use client";
import { useContext, createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider
      value={{
        isFormOpen,
        setIsFormOpen,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
