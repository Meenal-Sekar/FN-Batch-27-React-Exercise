import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Home() {

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleRegister = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      registerData
    );

    alert(res.data.message);
  };

  const handleLogin = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      loginData
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    alert("Login Successful");

    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center gap-10 items-center bg-gray-100">

        {/* Register */}

        <div className="bg-white p-6 shadow rounded w-80">

          <h2 className="text-2xl font-bold mb-4">
            Register
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full mb-3"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                username: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
          />

          <select
            className="border p-2 w-full mb-3"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                role: e.target.value,
              })
            }
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            className="bg-green-600 text-white p-2 w-full rounded"
            onClick={handleRegister}
          >
            Register
          </button>

        </div>

        {/* Login */}

        <div className="bg-white p-6 shadow rounded w-80">

          <h2 className="text-2xl font-bold mb-4">
            Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full mb-3"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                username: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />

          <button
            className="bg-blue-600 text-white p-2 w-full rounded"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

      </div>
    </>
  );
}

export default Home;