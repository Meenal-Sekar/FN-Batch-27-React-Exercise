import React from 'react'
// import './App.css'
import { useFormik } from "formik";
import * as Yup from 'yup'
const App = () => {

const formik = useFormik({
   
  initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(10,"Maximum 10 character accepted")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
         .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/,
      "Password must contain uppercase, lowercase, number and min 6 chars")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: (a1) => {
      alert("Form Submitted Successfully!");
      console.log(a1);
    },

  });




  return (
   <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
          Signup Form
         </h2>
          {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={formik.handleChange} 
          className="w-full p-2 mb-1 border rounded"
        />
        <p className="text-red-500 text-sm mb-3">
          {formik.errors.name}
        </p>

        
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={formik.handleChange} 
          className="w-full p-2 mb-1 border rounded"
        />
        <p className="text-red-500 text-sm mb-3">
          {formik.errors.email}
        </p>

       {/* Password */}
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          onChange={formik.handleChange} 
          title='1 uppercase, 1 lowercase, 1 digit(s), 1 symbol(s), 6-8 length'
          className="w-full p-2 mb-1 border rounded"
        />
        <p className="text-red-500 text-sm mb-3">
          {formik.errors.password}
        </p>

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
           onChange={formik.handleChange} 
          className="w-full p-2 mb-1 border rounded"
        />
        <p className="text-red-500 text-sm mb-4">
           {formik.errors.confirmPassword} 
        </p>

          <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
          Submit
        </button>

      </form>
     </div>
   </>
  )
}

export default App