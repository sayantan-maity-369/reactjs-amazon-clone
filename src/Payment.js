import React from 'react';
import BasketItem from './BasketItem';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';
function Payment() {

const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className="payment__container">
           <Link to='/checkout'>
           <h1>
                Checkout 
                ({basket?.length} items)
            </h1>
           </Link>
            <div className="payment__section">
                     <div className="payment__title">
                        <h3>Delivery Address</h3>
                     </div>
                     <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                     </div>



            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                {basket.map(item =>(
                        <BasketItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                ))}
                </div>
            </div>

             
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe magic */}
                </div>
            </div>







        </div>
    </div>
  )
}

export default Payment