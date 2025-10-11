import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6 }}>
      <h2>Formik Registration</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
          setStatus(null);
          try {
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/users",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              }
            );
            const data = await res.json();
            setStatus({ ok: true, data });
            resetForm();
          } catch {
            setStatus({ ok: false, error: "Registration failed." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <label>
              Username
              <Field name="username" />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red" }}
              />
            </label>
            <br />
            <label>
              Email
              <Field name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </label>
            <br />
            <label>
              Password
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && status.ok && (
              <div style={{ color: "green", marginTop: 8 }}>
                Registered (mock)
              </div>
            )}
            {status && status.ok === false && (
              <div style={{ color: "red", marginTop: 8 }}>{status.error}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
