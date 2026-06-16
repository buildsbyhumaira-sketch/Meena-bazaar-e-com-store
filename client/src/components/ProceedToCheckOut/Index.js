/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProceedToCheckOut.css"


function Index() {
    const navigate = useNavigate();
    const handlesubmit = useCallback(() => navigate('/trackorder', { replace: true }), [navigate]);
    const ref = useRef(null);
    let [name, setname] = useState("");
    let [Email, setemail] = useState("");
    let [address, setaddress] = useState("");
    let [credit, setcredit] = useState("");
    let [phone, setphone] = useState("");

    const validate = (e) => {
        e.preventDefault();
        if (!name && !Email && !address && !credit) {
            ref.current.classList.add("result");
            ref.current.textContent = "Form is Empty!"
        }
        else if (name.length <= 3) {
            ref.current.classList.add("result");
            ref.current.textContent = "Name Field Not Validated!"
        }
        else if (address.length <= 10 || !(address.includes("#")) || !(address.includes(","))) {
            ref.current.classList.add("result");
            ref.current.textContent = "Address Field Not Validated!"
        }
        else if ((Email.indexOf("@") <= 1) || (Email.indexOf(".") + 2 > Email.length)) {
            ref.current.classList.add("result");
            ref.current.textContent = "Email Field Not Validated!"
        }
        else if (phone.length !== 11) {
            ref.current.classList.add("result");
            ref.current.textContent = "phone filed Not Validated!"
        }

        else if (credit.length !== 16) {
            ref.current.classList.add("result");
            ref.current.textContent = "Credit Card field Not Validated!"
        }
        else {
            ref.current.classList.add("result")
            ref.current.textContent = "Form Validated!!! Hurray"
            setname("");
            setphone("")
            setemail("")
            setcredit("")
            setaddress("")
                (setInterval(() => handlesubmit(), 1200))
        }

    }

    return (
        <div className='ProceedToCheckOut'>
            <h3 ref={ref} onClick={e => e.currentTarget.classList.remove("result")} className="stat" >!</h3>
            <h1 className='title'>Payment Info</h1>
            <form action="">
                <label htmlFor="">Name :</label>
                <input value={name} onChange={(e) => setname(e.target.value)} type="text"
                    placeholder='Aman Ullah '
                />
                <label htmlFor="">Address :</label>
                <input value={address} onChange={(e) => setaddress(e.target.value)} type="text"
                    placeholder='house#1,street#1 ,islamabad pakistan'
                />
                <label htmlFor="">Email :</label>
                <input value={Email} onChange={(e) => setemail(e.target.value)} type="text" placeholder='amanu4519@gmail.com' />
                <label htmlFor="">Phone :</label>
                <input value={phone} onChange={(e) => setphone(e.target.value)} type="number"
                    placeholder='03045461456'
                />
                <label htmlFor="" >Credit Card Info :</label>
                <input value={credit} onChange={(e) => setcredit(e.target.value)} type="number"
                    placeholder='2222 2222 2222 2222'
                />
                <button onClick={(e) => validate(e)}>Process</button>

            </form>
        </div >
    )
}

export default Index
