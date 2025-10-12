import React, { useState } from "react";

export default function RegistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = values;
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!username.trim()) err.username = "Username is required";
    if (!email.trim()) err.email = "Email is required";
    if (!password) err.password = "Password is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setSubmitted(values);
    // replace with API call as needed
    setValues({ username: "", email: "", password: "" });
  };

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
      <h2>Registration (Controlled)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && (
            <div style={{ color: "red" }}>{errors.username}</div>
          )}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 12 }}>
          <strong>Submitted:</strong>
          <pre style={{ background: "#f7f7f7", padding: 8 }}>
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}
