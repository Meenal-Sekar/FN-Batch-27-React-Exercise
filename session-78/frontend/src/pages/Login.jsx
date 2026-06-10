import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    const res = await axios.post(
      "http://localhost:5000/login",
      loginData
    );

    alert(res.data.message);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
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
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;