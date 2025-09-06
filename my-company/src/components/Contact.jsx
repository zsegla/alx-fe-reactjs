import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally, you can clear the form here:
    // setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: '32px', background: '#1e293b', borderRadius: 12, minHeight: '60vh', color: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}>
      <h1 style={{ color: '#f472b6', fontSize: '2.5rem', marginBottom: '1rem', textShadow: '1px 1px 8px #000' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto 0', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#0f172a', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            borderRadius: 4,
            border: "1px solid #38bdf8",
            fontSize: "1rem",
            background: "#18181b",
            color: "#fff"
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            borderRadius: 4,
            border: "1px solid #facc15",
            fontSize: "1rem",
            background: "#18181b",
            color: "#fff"
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          style={{
            padding: "0.75rem",
            borderRadius: 4,
            border: "1px solid #a3e635",
            fontSize: "1rem",
            background: "#18181b",
            color: "#fff"
          }}
          required
        />
        <button
          type="submit"
          style={{
            background: "#f472b6",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "0.75rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Send Message
        </button>
        {submitted && (
          <p
            style={{ color: "#059669", marginTop: "1rem", textAlign: "center" }}
          >
            Thank you for contacting us!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
