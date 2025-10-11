import React, { useState } from "react";
import ControlledForm from "../components/ControlledForm";
import FormikForm from "../components/FormikForm";

const Home = () => {
  const [view, setView] = useState("controlled");
  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: 12 }}>
      <h1>Registration Forms</h1>
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => setView("controlled")}
          style={{ marginRight: 8 }}
        >
          Controlled
        </button>
        <button onClick={() => setView("formik")}>Formik</button>
      </div>

      {view === "controlled" ? <ControlledForm /> : <FormikForm />}
    </div>
  );
};

export default Home;
