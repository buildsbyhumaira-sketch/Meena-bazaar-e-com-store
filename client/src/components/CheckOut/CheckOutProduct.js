/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
// import { multiproduct } from "../StateProvider/reducer"
import "./CheckOutProduct.css"

function CheckOutProduct({ id, title, image, price, rating }) {

    const ref = useRef(null);
    const [num, setnum] = useState(1)
    //  product reference

    const [{ basket }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    const updateBasket = () => {
        dispatch({
            type: "MODIFY_THE_BASKET",
            id: id,
            title: title,
            price: price,
            num: num,
            ismodified: true
        })
    }
    return (
        <div className='checkOutProduct' id={id}>
            <img src={image} alt="" />
            <div className="checkOutProductInfo">
                <p className='checkOutProductTitle'>{title}</p>
                <p className='checkOutProductPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkOutProductRating'>
                    {
                        Array(rating).fill().map((index) => (<p key={index}>⭐</p>))
                    }
                </div>
                <div className='quantity'>
                    <input
                        ref={ref}
                        type="number"
                        min={1}
                        value={num}
                        onChange={e => setnum(e.target.value)}
                    />
                    <button onClick={updateBasket}>Set Quantity</button>
                </div>
                <button onClick={removeFromCart}>Remove Product</button>

            </div>
        </div>
    )
}

export default CheckOutProduct
