import { Link } from "react-router-dom"
import React from 'react'
import "./Footer.css"


function Index() {
    return (
        <div className='footer'>
            <div className="col1">
                <h2 className="title">KABAAR.COM</h2>
                <p className='des'>KABAAR.COM, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Meta, and Microsoft.</p>
            </div>
            <div className="col2">
                <h2 className="title">
                    Quick Links
                </h2>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
            <div className="col3">
                <h2 className="title">Legal</h2>
                <ul>
                    <Link to="/privacy policy"><li>Privacy Policy</li></Link>
                    <Link to="/return policy"><li>Return Policy</li></Link>

                </ul>
            </div>
        </div>
    )
}

export default Index
