function Services() {
  return (
    <div
      style={{
        background: "#0f172a",
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
          color: "#a3e635",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textShadow: "1px 1px 8px #000",
        }}
      >
        Our Services
      </h1>
      <ul
        style={{
          fontSize: "1.2rem",
          color: "#f3f4f6",
          listStyle: "square inside",
          lineHeight: 2,
          textAlign: "center",
          padding: 0,
        }}
      >
        <li>
          <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
            Technology Consulting
          </span>
        </li>
        <li>
          <span style={{ color: "#facc15", fontWeight: "bold" }}>
            Market Analysis
          </span>
        </li>
        <li>
          <span style={{ color: "#f472b6", fontWeight: "bold" }}>
            Product Development
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Services;
