import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  return (
    <section
      style={{
        maxWidth: 480,
        margin: "1rem auto",
        padding: 12,
        border: "1px solid #e6e6e6",
        borderRadius: 6,
      }}
    >
      <h2>Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Formik submit:", values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="f-username">Username</label>
              <br />
              <Field id="f-username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="f-email">Email</label>
              <br />
              <Field id="f-email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="f-password">Password</label>
              <br />
              <Field id="f-password" name="password" type="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
