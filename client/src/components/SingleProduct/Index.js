/* eslint-disable array-callback-return */
import React, { useRef } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import "./singleProduct.css"
import { useLocation } from 'react-router-dom'

function Index() {
    const location = useLocation()
    const product = location.state
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const ref = useRef(null);
    let flag = false;
    function addtobasket() {
        basket.filter((item) => { if (item.id === product.id) flag = true })
        if (flag === false) {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: product.id,
                    title: product.title,
                    url: product.url,
                    price: product.price,
                    rating: product.rating,
                }
            });
        }
        else {
            ref.current.classList.add("show"); if (ref) { window.addEventListener("keydown", ((e) => { if (e.keyCode === 27 || e.key === "Escape") { ref.current.classList.remove("show") } })) }
        }
    }
    return (
        <div className='singleProduct ' id={product.id} >
            {
                <h2 className='alert' ref={ref}>
                    <span id='span'
                        onClick=
                        {(e) => e.currentTarget.parentElement.classList.remove("show")}>
                        x
                    </span>
                    product is already in Cart!!!
                </h2>
            }
            <div className="productshow">
                <img src={product.url} alt="" />
                <div className="des">
                    <h2 >{product.title}</h2>
                    <h3>{product.price}</h3>
                    <div className="productRating">
                        {Array(product.rating).fill(null)?.map((_) => (<p>⭐</p>))}
                    </div>
                    <p>{product?.des}</p>
                    <button onClick={() => addtobasket()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Index
