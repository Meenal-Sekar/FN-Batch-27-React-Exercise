import React, { useEffect, useRef, useState } from 'react'

import { useDispatch } from 'react-redux';


// // useRef

// Access input field directly //

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { addToCart } from '../features/cartSlice';

function Home()
{

 const [products, setProducts] = useState([]);

    
  const dispatch = useDispatch();    //data share to store
  const navigate = useNavigate();
  const inputRef = useRef();

 useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

// get  20  rawdata   -->  res.data --->setProducts---->products
// need: retrieve from product array   (foreach)(map)

const handleAdd=(a1)=>
{
        dispatch(addToCart(a1))
}
const handleBuy=()=>
{
    navigate('/success')
}

return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">🛍 Products</h1>

      <input type='text'  ref={inputRef}
        
        placeholder="Search..."
        className="border p-2 mb-4"
      />
      <button className='bg-blue-400 text-white p-2 mb-4 '>Search</button>

      <div className="grid grid-cols-3 gap-4">
        {products.map((item) =>
         (
          <div key={item.id} className="border p-3 rounded shadow">
            <img src={item.image} className="h-32 mx-auto" />
            <h2 className="text-lg">{item.title.slice(0, 20)}</h2>
            <p>₹ {item.price}</p>

            <button
              onClick={() => handleAdd(item)}
              className="bg-blue-500 text-white px-2 py-1 m-1"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuy}
              className="bg-green-500 text-white px-2 py-1 m-1"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Home