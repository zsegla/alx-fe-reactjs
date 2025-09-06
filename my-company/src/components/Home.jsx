function Home() {
  return (
    <div
      style={{
        padding: "32px",
        background: "#18181b",
        borderRadius: 12,
        minHeight: "60vh",
        color: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      }}
    >
      <h1
        style={{
          color: "#facc15",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textShadow: "1px 1px 8px #000",
        }}
      >
        Welcome to Our Company
      </h1>
      <p style={{ color: "#f3f4f6", fontSize: "1.2rem" }}>
        We are dedicated to delivering{" "}
        <span style={{ color: "#38bdf8", fontWeight: "bold" }}>excellence</span>{" "}
        in all our services.
      </p>
    </div>
  );
}

export default Home;
