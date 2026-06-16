import React, { useEffect, useRef, useState } from 'react'
import { products } from "../ProductList/products";
import Product from "../Product/Index";
import "./Shop.css";

function Index() {
    const [data, setdata] = useState([])
    const list_products = async () => {
        const res = await fetch("http://localhost:9999/product")
        const data = await res.json()
        setdata([...data?.result])
    }
    useEffect(() => {
        list_products()
    }, [])
    const ref = useRef(null);
    const ulref = useRef(null);
    let [burgerIcon, setBurgerIcon] = useState(false);
    setBurgerIcon = () => {
        if (!burgerIcon) {
            burgerIcon = true;
            ref.current.classList.add("active");
            ulref.current.classList.add("active")
        }
        else {
            burgerIcon = false;
            ref.current.classList.remove("active")
            ulref.current.classList.remove("active")
        }
    }
    return (
        <div className='shop'>

            <div className="filterBar">
                <div className="burgerDiv" onClick={() => setBurgerIcon()}>
                    <div className="burger" ref={ref} ></div>
                </div>
                <h2>Categories</h2>
                <ul ref={ulref}>
                    <li>New Products</li>
                    <li>Old Products</li>
                </ul>
            </div>
            <div className="shopProducts products">
                {
                    data?.map((e, i) => (<Product
                        title={e?.title}
                        des={e?.des}
                        id={e?._id}
                        url={e?.img}
                        price={e?.price}
                        rating={e?.rating}
                        key={e.id} />))
                }
            </div>
        </div>
    )
}

export default Index
