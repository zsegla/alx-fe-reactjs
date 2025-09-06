function About() {
  return (
    <div
      style={{
        background: "#18181b",
        minHeight: "80vh",
        padding: "2.5rem",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem auto",
        maxWidth: "700px",
        width: "90vw",
      }}
    >
      <h1
        style={{
          color: "#38bdf8",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textShadow: "1px 1px 8px #000",
        }}
      >
        About Us
      </h1>
      <p style={{ color: "#f3f4f6", fontSize: "1.2rem", textAlign: "center" }}>
        Our company has been providing{" "}
        <span style={{ color: "#facc15", fontWeight: "bold" }}>
          top-notch services
        </span>{" "}
        since 1990. We specialize in various fields including{" "}
        <span style={{ color: "#a3e635", fontWeight: "bold" }}>technology</span>
        ,{" "}
        <span style={{ color: "#f472b6", fontWeight: "bold" }}>marketing</span>,
        and{" "}
        <span style={{ color: "#f87171", fontWeight: "bold" }}>
          consultancy
        </span>
        .
      </p>
    </div>
  );
}

export default About;
