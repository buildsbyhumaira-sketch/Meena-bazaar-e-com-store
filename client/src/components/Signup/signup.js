/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Login.css"

import { signupAPI } from "../../API/auth"
function Index() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const signup = async () => {
        const n = name.current, e = email.current, p = password.current
        if (n && e && p) {
            const res = await signupAPI({
                userName: n,
                email,
                password
            })
            const data = await res.json()

            console.log(data);
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
                <form action={signup}>
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
                    <button type='submit' >Craete Account</button>
                </form>
                <p>By singning-in you agree to accept the terms and conditions and privacy policy</p>
                <button>Log in?</button>
            </div>
        </div>
    )
}
export default Index
