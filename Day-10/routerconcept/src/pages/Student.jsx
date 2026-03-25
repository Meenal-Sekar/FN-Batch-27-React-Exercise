import React from 'react'
import {useLoaderData} from 'react-router-dom'


const Student = () => {

   const students = useLoaderData();

  return (
    <>
        <h2 className="text-3xl font-bold mb-4">
        Students List
      </h2>
 {students.map((s1) => (

          <div
            key={s1.id}
            className="bg-white p-4 rounded shadow" >
          
            <h3 className="font-bold">{s1.name}</h3>
            <p className="text-gray-500">{s1.email}</p>
           <p className="text-gray-500">{s1.phone}</p>

          </div>

        ))}

    </>
  )
}

export default Student

export const studentsLoader = async () => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
};