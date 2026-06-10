import axios from "axios";
import { useEffect, useState } from "react";

function Records() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    city: "",
  });

  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/students";

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };


  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`${API}/${editId}`, formData);
    } else {
      await axios.post(API, formData);
    }

    setFormData({
      name: "",
      age: "",
      email: "",
      course: "",
      city: "",
    });

    setEditId(null);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

 const editStudent = (student) => {
  console.log("Selected Student:", student);

  setEditId(student._id);

  setFormData({
    name: student.name,
    age: student.age,
    email: student.email,
    course: student.course,
    city: student.city,
  });
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Student Records Management
        </h1>

        {/* Form Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            {editId ? "Update Student" : "Add Student"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Age"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.age}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Course"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.course}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  course: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  city: e.target.value,
                })
              }
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`mt-6 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 ${
              editId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editId ? "Update Student" : "Add Student"}
          </button>
        </div>

        {/* Student List */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Student List
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <div
                key={student._id}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {student.name}
                </h3>

                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> {student.age}
                </p>

                <p className="text-gray-600 mb-1">
                  <strong>Email:</strong> {student.email}
                </p>

                <p className="text-gray-600 mb-1">
                  <strong>Course:</strong> {student.course}
                </p>

                <p className="text-gray-600 mb-4">
                  <strong>City:</strong> {student.city}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => editStudent(student)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {students.length === 0 && (
            <div className="text-center mt-10 text-gray-500 text-lg">
              No student records found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Records;