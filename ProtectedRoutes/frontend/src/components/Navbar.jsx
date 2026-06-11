import { Link } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">

      <Link to="/">Home</Link>

      <Link to="/services">Services</Link>

      {role === "admin" && (
        <Link to="/dashboard">Dashboard</Link>
      )}

    </nav>
  );
}

export default Navbar;