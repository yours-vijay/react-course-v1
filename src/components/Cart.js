import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsList from './ItemsList'
import { clearItems } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items );

    const dispatch = useDispatch();

    const handleclearcart =()=>{
      dispatch(clearItems());
    }

  return (
    <div className='container'>
      <button type='button' className='btn bg-black my-2 text-white' onClick={handleclearcart}>clear cart</button>
      {cartItems.length === 0 && <p>Cart is empty, add few items </p>} 
        <ItemsList items={cartItems}/>
    </div>
  )
}

export default Cart