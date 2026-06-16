/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import Product from "../Product/Index";

import "./index.css"
function Dashboard() {
    const [currentTab, setcurrentTab] = useState(1)
    const [data, setData] = useState()
    const [title, settitle] = useState()
    const [price, setprice] = useState()
    const [stock, setstock] = useState()
    const [category, setcategory] = useState('')

    const [img, setimg] = useState()
    const [desc, setdesc] = useState()
    const [_id, setId] = useState()
    const [message, setmessage] = useState(false)
    useEffect(async () => {
        // let admin = JSON.parse(localStorage.getItem("accessToken")).isAdmin
        // if (!admin)
        //     navigate("/")
    }, [])
    useEffect(async () => {
        currentTab === 1 && users()
        currentTab === 2 && list_products()
        setmessage(false)
    }, [currentTab])
    const users = async () => {
        const res = await fetch("http://localhost:9999/user/all")
        const data = await res.json()
        setData([...data?.result])
    }
    const list_products = async () => {
        const res = await fetch("http://localhost:9999/product")
        const data = await res.json()
        setData([...data?.result])
    }
    const create_product = async (e) => {
        e?.preventDefault()
        if (title, desc, price, stock, img, category) {
            const splittedStr = category.split(',')
            const res = await fetch(`http://localhost:9999/product`,
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, des: desc, price, inStock: stock, img, categories: splittedStr })
                })
            const data = await res.json()
            if (data?.type === "success") {
                Swal.fire({
                    icon: "success",
                    text: "product created successfully!"
                })
            }
            else {
                Swal.fire({
                    icon: "error",
                    text: data?.result
                })
            }
        }
        else {
            Swal.fire({
                icon: "error",
                text: "Fill product details first"
            })
        }
    }

    const request = async () => {
        console.log("update method invoked");
        const res = await fetch(`http://localhost:5000/api/products/update/${_id}`,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, desc, price, stock, img, category, })
            })
        return res
    }
    async function update_product() {
        const res = await request();
        settitle("")
        setdesc("")
        setprice("")
        setstock("")
        setId("")
        setcategory("")
        setimg("")
        await res.status === 200 && setmessage(true)
        console.log("updated", data);
    }
    const delete_product = async () => {
        const res = await fetch(`http://localhost:9999/product/${_id}`,
            {
                method: "delete",
                headers: { 'Content-Type': 'application/json' },
            })
        await res.status === 200 && setmessage(true)
    }
    return (
        <div className='dashboard'>
            <aside>
                <div className="logo">
                    <Link to="/" >
                        <img className='loginLogo' src="/images/logologin.png" alt="" />
                    </Link>
                </div>
                <button className='btn' onClick={() => setcurrentTab(1)}>list users</button>
                <button className='btn' onClick={() => setcurrentTab(2)}>List product</button>
                {/* <button className='btn' onClick={() => setcurrentTab(3)}>Edit product</button> */}
                <button className='btn' onClick={() => setcurrentTab(4)}>Create product</button>
                <button className='btn' onClick={() => setcurrentTab(5)}>delete product</button>
            </aside>
            <main>
                <h1>Dashboard</h1>
                <div className="dashboard_data">
                    {
                        currentTab === 1 &&
                        <div className="usersList">
                            {console.log(data)}
                            {data?.map((e, i) => {
                                return (
                                    <div className='user' key={i}>
                                        <h3>
                                            {e.username}
                                        </h3>
                                        <p>{e.email}</p>
                                        {/* <span>{e.isAdmin ? "admin" : "user"}</span> */}
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {currentTab === 2 && <div className="usersList">
                        <div className="row" style={{ justifyContent: 'flex-start' }}>
                            {
                                data?.map(e =>
                                    <Product
                                        view
                                        id={e?._id}
                                        title={e?.title}
                                        url={e?.img}
                                        price={e?.price}
                                        rating={e?.rating}
                                    />)
                            }
                        </div>
                    </div>}
                    {currentTab === 3 &&
                        <div className="col-2">
                            <div className="form-container" style={{ width: "min(550px,95%)", marginTop: "2rem", borderRadius: "1rem", height: "unset" }}>
                                <h2>Edit Product</h2>
                                <form onSubmit={
                                    async (e) => {
                                        e.preventDefault();
                                        update_product()
                                    }
                                } style={{ position: 'unset', marginTop: "2rem", padding: "0", maxWidth: "unset" }}>
                                    <h3>{message && "Product Updated!!! Hurray"}</h3>
                                    <p>Title</p>
                                    <input type="text" value={title} onChange={e => settitle(e.target.value)} placeholder="Username" />
                                    <p>Description</p>
                                    <input type="text" value={desc} onChange={e => setdesc(e.target.value)} placeholder="description" />
                                    <p>Image Link</p>
                                    <input type="text" value={img} onChange={e => setimg(e.target.value)} placeholder="Image Link" />
                                    <p>Price</p>
                                    <input type="number" value={price} onChange={e => setprice(e.target.value)} placeholder="Email" />
                                    <p>Stock</p>
                                    <input type="number" value={stock} onChange={e => setstock(e.target.value)} placeholder="Passswrord" />
                                    <p>Category</p>
                                    <input
                                        type="text"
                                        value={category}
                                        onChange={e => setcategory(e.target.value)}
                                        placeholder="Enter categories seperated by commas e.g, clothes,perfumes,shoes" />
                                    <button type="submit" className="btn" >Update</button>
                                </form>
                            </div>
                        </div>
                    }
                    {
                        currentTab === 4 && <div className="col-2">
                            <div className="form-container" style={{ width: "min(550px,95%)", marginTop: "2rem", borderRadius: "1rem", height: "unset" }}>
                                <h2>Create Product</h2>
                                <form id="regform" onSubmit={(e) => { e.preventDefault(); create_product(e); }} style={{ position: 'unset', marginTop: "2rem", padding: "0", maxWidth: "unset" }}>
                                    <h3>{message && "Product Created!!! Hurray"}</h3>
                                    <p>Title</p>
                                    <input type="text" value={title} onChange={e => settitle(e.target.value)} placeholder="title" />
                                    <p>Description</p>
                                    <input type="text" value={desc} onChange={e => setdesc(e.target.value)} placeholder="description" />
                                    <p>Image Link</p>
                                    <input type="text" value={img} onChange={e => setimg(e.target.value)} placeholder="Image Link" />
                                    <p>Price</p>
                                    <input type="number" value={price} onChange={e => setprice(e.target.value)} placeholder="Price" />
                                    <p>Stock</p>
                                    <input type="number" value={stock} onChange={e => setstock(e.target.value)} placeholder="Stock" />
                                    <p>Category</p>
                                    <input type="text" value={category} onChange={e => setcategory(e.target.value)} placeholder=" Enter categories seperated by commas e.g, clothes,perfumes,shoes" />
                                    <button type="submit" className="btn">create</button>
                                </form>
                            </div>
                        </div>
                    }
                    {
                        currentTab === 5 && <div className="col-2">
                            <div className="form-container" style={{ width: "min(550px,95%)", marginTop: "2rem", borderRadius: "1rem", height: "unset" }}>
                                <h2>Delete Product</h2>
                                <form id="regform" onSubmit={(e) => { e.preventDefault(); delete_product(e); }} style={{ position: 'unset', marginTop: "2rem", padding: "0", maxWidth: "unset" }}>
                                    <h3>{message && "Product Deleted!"}</h3>
                                    <p>Enter Product Id</p>
                                    <input type="text" onChange={e => setId(e.target.value)} placeholder="Enter Id" />
                                    <button type="submit" className="btn">Delete</button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default Dashboard