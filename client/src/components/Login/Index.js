/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Login.css"

import { signupAPI, singinAPI } from "../../API/auth"
function Index() {
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const signin = async (obj) => {
        obj.preventDefault()
        const e = email.current, p = password.current
        if (e && p) {
            const res = await singinAPI({
                email: e,
                password: p
            })
            const data = await res.json()
            if (data?.type === "success") {
                Swal.fire({
                    icon: "success",
                    title: "You logged in successfully"
                }).then(e => {
                    if (e.isConfirmed) {
                        localStorage.setItem("user", JSON.stringify(data?.result))
                        navigate("/")
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
    return (
        <div className='login'>
            <Link to="/"><img className='loginLogo' src="/images/logologin.png" alt="" /></Link>
            <div className="Container">
                <h1>Sign In </h1>
                <form onSubmit={signin}>
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
                    <button type='submit' >Sign in</button>
                </form>
                <p>By singning-in you agree to accept the terms and conditions and privacy policy</p>
                <button
                    onClick={() => navigate("/signup")}
                >Create Account</button>
            </div>
        </div>
    )
}
export default Index
