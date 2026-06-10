import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const handleRegister = async () => {
    const res = await axios.post(
      "http://localhost:5000/register",
      formData
    );

    alert(res.data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;