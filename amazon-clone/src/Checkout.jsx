import React from 'react'
import HomeLayout from './HomeLayout'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
   <>
   <HomeLayout>
   <div className='checkout'>
    <div className='checkout_left'>
           <img className='checkout_ad'
            src='/images/amazon-ad.jfif' alt=''/>
     <div>
        <h2 className='checkout_title'>Your Shopping 
        Basket</h2>
        {/* BasketItem*/}
        {/* BasketItem*/}
        {/* BasketItem*/}
        {/* BasketItem*/}
        {/* BasketItem*/}
     </div>
    </div>
    <div className='checkout_right'>
      <Subtotal/>

    </div>
    </div>
    </HomeLayout>
   </>
   )
} 

export default Checkout