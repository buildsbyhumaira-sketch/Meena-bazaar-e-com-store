/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import "../CheckOut/CheckOutProduct.css"

function Index({ id, title, image, price, rating }) {

    const ref = useRef(null);
    const [num, setnum] = useState(1)
    //  product reference

    const [{ basket }, dispatch] = useStateValue();


    return (
        <>
            <div className='checkOutProduct' id={id}>
                <img src="/images/product1.jpg" alt="" />
                <div className="checkOutProductInfo">
                    <p className='checkOutProductTitle'>New Product jergecy</p>
                    <p className='checkOutProductPrice'>
                        <small>$</small>
                        <strong>{100}</strong>
                    </p>
                    <div className='checkOutProductRating'>
                        {
                            Array(3).fill().map((index) => (<p key={index}>⭐</p>))
                        }
                    </div>
                    <button onClick={""}>Add Product</button>

                </div>
            </div>
            <div className='checkOutProduct' id={id}>
                <img src="/images/product2.jpg" alt="" />
                <div className="checkOutProductInfo">
                    <p className='checkOutProductTitle'>New Product Gercy 5 pair</p>
                    <p className='checkOutProductPrice'>
                        <small>$</small>
                        <strong>{400}</strong>
                    </p>
                    <div className='checkOutProductRating'>
                        {
                            Array(4).fill().map((index) => (<p key={index}>⭐</p>))
                        }
                    </div>
                    <button onClick={""}>Add Product</button>

                </div>
            </div>
            <div className='checkOutProduct' id={id}>
                <img src="/images/product4.jpg" alt="" />
                <div className="checkOutProductInfo">
                    <p className='checkOutProductTitle'>New Product Jacket</p>
                    <p className='checkOutProductPrice'>
                        <small>$</small>
                        <strong>{100}</strong>
                    </p>
                    <div className='checkOutProductRating'>
                        {
                            Array(5).fill().map((index) => (<p key={index}>⭐</p>))
                        }
                    </div>
                    <button onClick={""}>Add Product</button>

                </div>
            </div>
        </>
    )
}

export default Index
