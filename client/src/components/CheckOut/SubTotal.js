/* eslint-disable no-unused-vars */
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import { basketTotal } from "../StateProvider/reducer"
import { Link } from 'react-router-dom'
import "./SubTotal.css"

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subTotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>SubTotal : ({basket.length} items) <strong> {value}</strong></p>
                        <small className='subTotalGift'>
                            <input type="checkbox" />This order Contains a Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                value={basketTotal(basket)}
                thousandSeparator={true}
                prefix='$'
            />
            <Link Link to="/payment"><button>Proceed To Checkout</button></Link>
        </div>
    )
}

export default SubTotal
