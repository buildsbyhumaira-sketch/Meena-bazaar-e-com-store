import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Header.css"


function Index() {
    const [{ basket }] = useStateValue();
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <nav className="Header">
            <Link to="/" className='headerA'>
                <h1>Meena Bazar</h1>
            </Link>
            <div className="headerSearch">
                <input className='headerSearchInput' type="search" name="" id="" />
                <Link to="/searchitem"><SearchIcon className='headerSearchIcon' /></Link>
            </div>
            <div className="headerNav">

                <Link to="/login" className='headerLink'>
                    <div className="headerOption">
                        {
                            user?.username ?
                                <Fragment>
                                    <span className='headerOptionL1'>Welcome</span>
                                    <span>
                                        {user?.username}
                                    </span>
                                </Fragment> :
                                <Fragment>
                                    <span className='headerOptionL1'>
                                        Try,
                                    </span>
                                    <span className='headerOptionL2'>
                                        Sign In
                                    </span>
                                </Fragment>
                        }
                    </div>
                </Link>
                <Link to="/shop" className='headerLink'>
                    <div className="headerOption">
                        <span className='headerOptionL1'>
                            Visit
                        </span>
                        <span className='headerOptionL2'>
                            Shop
                        </span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="headerOptionBasket">
                        <ShoppingBasket />
                        <span className='headerOptionL2 BasketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav >
    )
}

export default Index
