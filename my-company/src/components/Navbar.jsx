import { Link } from "react-router-dom";
function Navbar() {
  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    transition: "background 0.2s, color 0.2s",
    background: "#2563eb",
    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
    border: "2px solid #fff",
  };
  const navStyle = {
    padding: "1rem",
    background: "linear-gradient(90deg, #0f172a, #2563eb)",
    backgroundColor: "#0f172a",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
  };
  // Helper functions for hover
  const handleMouseOver = (e) => {
    e.target.style.background = "#facc15";
    e.target.style.color = "#18181b";
    e.target.style.borderColor = "#facc15";
  };
  const handleMouseOut = (e) => {
    e.target.style.background = "#2563eb";
    e.target.style.color = "#fff";
    e.target.style.borderColor = "#fff";
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        About
      </Link>
      <Link
        to="/services"
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
