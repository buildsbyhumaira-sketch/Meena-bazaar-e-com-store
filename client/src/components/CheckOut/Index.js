/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import CheckOutProduct from './CheckOutProduct';
import SubTotal from './SubTotal';
function Index() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkOut'>
            <div className="leftCheckOut">
                {
                    basket?.length === 0 ? (
                        <div>
                            <h1>Your Basket is Empty <br /> Add a product to continue</h1>
                        </div>
                    ) : (
                        <div>
                            <h1>Your Shopping Cart</h1>
                            <div className="basketProducts">
                                {
                                    basket.map(item => (<CheckOutProduct
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        image={item.url}
                                        price={item.price}
                                        rating={item.rating}
                                    />))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="rightCheckOut">
                {
                    basket.length > 0 &&
                    <>
                        < h1 > Subtotal  </h1>
                        <SubTotal />
                    </>
                }
            </div>
        </div >
    )
}

export default Index
