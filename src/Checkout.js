import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import BasketItem from './BasketItem'
import { useStateValue } from './StateProvider'
function Checkout() {
  const [{basket,user},dispatch]= useStateValue();
  return (
    <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/P3_BFL_GW-editorial_1150x323._CB609056541_.jpg" 
                alt="Ad here" />

                <div>
                  <h3>Hello,
                    {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    
        {basket.map(item =>(
          <BasketItem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
/>

        ))}


                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
    </div>
  )
}

export default Checkout