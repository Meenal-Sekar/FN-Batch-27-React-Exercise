import Navbar from "../components/Navbar";

function Services() {
  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-5">
          Services Page
        </h1>

        <ul className="list-disc ml-10 text-lg">
          <li>Student Management</li>
          <li>Course Management</li>
          <li>Attendance Tracking</li>
          <li>Placement Support</li>
        </ul>

      </div>
    </>
  );
}

export default Services;