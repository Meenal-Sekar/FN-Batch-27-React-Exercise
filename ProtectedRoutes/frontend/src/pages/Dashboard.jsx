import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {

  const [message, setMessage] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {

    if (role !== "admin") {
      setMessage(
        "❌ Access Denied! Only Admin Can Access Dashboard"
      );
      return;
    }

    const fetchData = async () => {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/users/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message);
    };

    fetchData();

  }, []);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">

        <div className="bg-white p-10 shadow rounded">

          <h1 className="text-3xl font-bold mb-4">
            Dashboard
          </h1>

          <p className="text-lg">
            {message}
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;