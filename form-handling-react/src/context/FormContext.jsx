import React, { createContext, useState } from "react";

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other form fields as needed
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      // Reset other form fields as needed
    });
  };

  const value = { formData, updateFormData, resetForm };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
