/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Login.css"

import { signupAPI } from "../../API/auth"
function Index() {
    const navigate = useNavigate()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const signup = async (obj) => {
        obj.preventDefault()
        const n = name.current, e = email.current, p = password.current
        if (n && e && String(p).length >= 8) {
            const res = await signupAPI({
                username: n,
                email: e,
                password: p,
            })
            const data = await res.json()
            if (data?.type === "success") {
                Swal.fire({
                    icon: "success",
                    title: data?.result
                }).then(e => {
                    if (e.isConfirmed) {
                        navigate("/login")
                    }
                })
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: data?.result
                })
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Fields are not valid!"
            })
        }
    }
    // username
    // email
    // password
    // isAdmin
    return (
        <div className='login'>
            <Link to="/"><img className='loginLogo' src="/images/logologin.png" alt="" /></Link>
            <div className="Container">
                <h1>Sign In </h1>
                <form onSubmit={signup}>
                    <h5>Name</h5>
                    <input
                        required
                        type="text"
                        onChange={e => name.current = e.currentTarget.value}
                    />
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        required
                        onChange={e => email.current = e.currentTarget.value}
                    />
                    <h5>Password</h5>
                    <input
                        required
                        type="password"
                        onChange={e => password.current = e.currentTarget.value}
                    />
                    <button type='submit' >Create Account</button>
                </form>
                <p>By singning-in you agree to accept the terms and conditions and privacy policy</p>
                <button
                    onClick={() => navigate("/login")} >
                    Login Account</button>

            </div>
        </div>
    )
}
export default Index
