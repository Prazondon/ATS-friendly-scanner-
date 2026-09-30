import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">AI Resume Analyzer</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;