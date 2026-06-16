/* eslint-disable array-callback-return */
import React, { useRef } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import { Link } from 'react-router-dom';
import './Product.css';
import Swal from 'sweetalert2';

function Index({ id, title, url, price, rating, view, des }) {
    const [{ basket }, dispatch] = useStateValue();
    const ref = useRef(null);
    let flag = false;
    function addtobasket() {
        basket.filter(item => (item.id === id) ? flag = true : '')
        if (flag === false) {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    url: url,
                    price: price,
                    rating: rating,
                }
            });
        }
        else {
            ref.current.classList.add("show")
            if (ref) {
                window.addEventListener("keydown", ((e) => {
                    if (e.keyCode === 27 && e.key === "Escape") ref.current.classList.remove("show")
                }))
            }
        }
    }
    return (
        <div className="product" id={id} >
            {
                <h2 className='alert' ref={ref}   >
                    <span id='span'
                        onClick=
                        {(e) => e.currentTarget.parentElement.classList.remove("show")
                        }
                    >
                        x
                    </span>
                    product is already in Cart!!!
                </h2>
            }
            <div className="productInfo">
                <p>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong >{price}</strong>
                </p>
                <div className="productRating">{Array(rating).fill().map((_) => (<p>⭐</p>))}</div>
            </div>
            <img src={url} alt='' />
            {
                !view &&
                <button onClick={() => addtobasket()}>Add to Basket</button>}
            {
                !view &&
                <button className='btn2'>
                    <Link
                        state={{ id, title, url, price, rating, des }}
                        to="/product">
                        View Product
                    </Link>
                </button>
            }
            {
                view &&
                <button className='btn2'
                    onClick={() => {
                        Swal.fire({
                            icon: "success",
                            text: "id copied to clipboard"
                        })
                        navigator.clipboard.writeText(id)
                    }}>
                    {id}
                </button>
            }
            {
                view &&
                <button className='btn2' style={{ width: "100px" }}>
                    Edit
                </button>
            }
        </div >
    )
}

export default Index;

