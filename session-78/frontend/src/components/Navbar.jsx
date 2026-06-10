import { Link } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Auth App
        </h1>

        <div className="space-x-4">

          <Link
            to="/"
            className="hover:text-yellow-300">
            Home
          </Link>


{/* user  or admin */}

          {(role === "user" ||
            role === "admin") && (
            <Link
              to="/service"
              className="hover:text-yellow-300"
            >
              Service
            </Link>
          )}
             {role === "admin" && (
            <Link
              to="/records"
              className="hover:text-yellow-300"
            >
              Records
            </Link>
          )}

{/* only for admin */}
          {role === "admin" && (
            <Link
              to="/dashboard"
              className="hover:text-yellow-300"
            >
              Dashboard
            </Link>
          )}

       

          <Link
            to="/login"
            className="hover:text-yellow-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-yellow-300"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;