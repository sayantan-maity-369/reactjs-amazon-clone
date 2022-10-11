import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';
function BasketItem({id,image,title,price,rating}) {
  
    const [{basket},dispatch ] = useStateValue();
  const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
  };
  
  
    return (
    <div className='basketitem'>
        <img src={image} alt="" className="basketitem__image" />

        <div className="basketitem__info">
            <p className="basketitem__title">{title}</p>
            <p className="basketitem__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
            <div className='basketitem__rating'>
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>


    </div>
  )
}

export default BasketItem