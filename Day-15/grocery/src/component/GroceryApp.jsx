import React, { useState } from 'react'

import { addItem,editItem,deleteItem } from '../feature/grocerySlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const GroceryApp = () => {

    const[item,setItem]=useState("");   //Apple 1 kg
    const[editId,setEditId]=useState(null); //101

    const dispatch=useDispatch();
     const items = useSelector((state) => state.grocery.items);


    const handleAdd=()=>
    {
        //validate the inputbox when we run program
        if (item.trim() === "") return;

                 if(editId)
                 {
                dispatch(editItem({ id: editId, newName: item }));
                setEditId(null);
                }

            else 
            {
                dispatch(addItem(item));
            }

             setItem("");


    }
    const handleEdit=(g)=>
    {
    setItem(g.name);
    setEditId(g.id);
    }

  return (

        <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center">
      
    <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          🛒 Grocery Manager
        </h1>
         {/* Input Section */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter grocery item..."
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none p-2 flex-1 rounded-lg"
          />
         <button
            onClick={handleAdd}
            className={`px-4 rounded-lg text-white 
                ${editId
                    
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editId ? "Update" : "Add"}

          </button>

        </div>
   
        {/* Display the list items */}


           <ul className="space-y-3">
            
          {items.length === 0 ?
           (
            <p className="text-center text-gray-400">
              No items added yet 📝
            </p>

           )
           : 
           (
//g.id : 101  g.name==APple 1 kg
            items.map((g) =>
             (
              <li
                key={g.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                >
                <span className="text-gray-700 font-medium">
                  {g.name}
                </span>

                <div className="flex gap-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(g)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    ✏️
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => dispatch(deleteItem(g.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    🗑️
                  </button>
                </div>

              </li>
            ))
          )}
         </ul> 


    </div>
    
    </div>
        </>
    
  )
}

export default GroceryApp