import React from 'react'
import { useSelector } from 'react-redux';    //get the information from store
function Cart()

{
      const cartItems = useSelector((state) => state.cart.items);

    return(
        <>
            <h1>Selected Items</h1>
             <div className="p-5">
      <h1 className="text-xl font-bold">🛒 Cart Items</h1>

      {
        cartItems.map((item, index) => (
        <div key={index} className="border p-2 m-2">
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <p>₹ {item.price}</p>
        </div>
        ))
      }
            </div>


        </>
    )
}

export default Cart