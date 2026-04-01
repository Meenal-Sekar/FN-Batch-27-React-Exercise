import React from 'react'

import {useLoaderData} from 'react-router-dom'

export const userLoader = async ({ params }) => {
  const { id } = params;

  // Fake data 
  const users = [
    { id: "1", name: "Meena", role: "Trainer" ,city:"Chennai"},
    { id: "2", name: "Arun", role: "Developer" ,city:"Coimbatore"},
    { id: "3", name: "Divya", role: "Designer",city:"Bangalore" },
    { id: "4", name: "ramya", role: "Tailor" ,"city":"managalore"},
    { id: "5", name: "siva", role: "Designer","city" :"madurai"},
    { id: "6", name: "vignesh", role: "Tester" ,"city":"Trichy"},
    
  ];

  const userData = users.find((a) => a.id === id);

  return userData || { name: "User Not Found" };
};



//how to display the array

const Users = () => 
    {

        const jack=useLoaderData();
        //hook call
  return (
    <div className='p-5 bg-blue-200'>
    <h1 className='text-orange-600'> User Profile Data</h1>  
        
        <div className="mt-4 border p-3">
        <p><strong>Name:</strong> {jack.name}</p>
        <p><strong>Role:</strong> {jack.role || "N/A"}</p>
        <p><strong>City:</strong> {jack.city || "N/A"}</p>
        </div>
    


    </div>
  )
}

export default Users


