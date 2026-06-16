import React, { useRef } from 'react'
import { Link } from 'react-router-dom';


function PageInfo() {
    let ref = useRef(null);
    let page = useRef(null);
    window.addEventListener("load", () => {
        window.addEventListener("keydown", (e) => {
            if ((e.keyCode === 27) && (ref != null || ref !== undefined))
                ref.current.classList.remove("active")
        })
        ref.current.addEventListener("click", () => {
            ref.current.classList.toggle("active")
        })
        window.addEventListener("scroll", () => {
            if (window.scrollY > 190) {
                document.querySelector(".Header").classList.add("fixed")
            }
            else {
                document.querySelector(".Header").classList.remove("fixed")
            }
        })
    })

    return (
        <>
            <div className="pages" ref={page} onClick={() => ref.current.classList.toggle("active")}>Pages</div>
            <div className='info' ref={ref}>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/searchitem">Search Page</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/payment">Payment</Link>
                <Link to="/trackorder">trackorder</Link>
                <strong>
                    <i><p onClick={() => ref.current.classList.remove("active")}>Click here or <kbd>Escape</kbd> to continue</p></i>
                </strong>
            </div >
        </>
    )
}

export default PageInfo
