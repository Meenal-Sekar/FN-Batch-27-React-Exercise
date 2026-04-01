import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import { increment,decrement,reset } from '../features/counterSlice'
function Counter()
{

     const m1 = useSelector((state) => state.counter.value);

    const dispatch=useDispatch();

    return(
        <>

         <div className="flex flex-col items-center justify-center h-screen
     bg-gray-100">
      
      <h1 className="text-4xl font-bold mb-6 text-orange-700">Redux -Counter</h1>

      <div className="bg-navy-200 shadow-lg p-6 rounded-xl text-center">

        <p className="text-3xl mb-4"> {m1} </p>

        <div className="flex gap-3">

          <button  onClick={() => dispatch(increment())}


            className="bg-green-500 text-white px-4 py-2 rounded">
            ➕  
          </button>


          <button  onClick={() => dispatch(decrement())}
           
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            ➖
          </button>

          <button  onClick={() => dispatch(reset())}
           
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            🔄️
          </button>
        </div>


      </div>
         </div>
  

        </>
    )
}
 


export default Counter