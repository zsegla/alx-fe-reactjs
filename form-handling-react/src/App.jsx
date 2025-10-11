import React from "react";
import { FormProvider } from "./context/FormContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <FormProvider>
      <Home />
    </FormProvider>
  );
};

export default App;
