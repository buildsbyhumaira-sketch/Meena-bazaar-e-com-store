/* eslint-disable array-callback-return */
import React from 'react';
import "./Home.css";
// import { products } from '../ProductList/products';
import Product from '../Product/Index';

function Index() {
    return (
        <div className='home'>
            {/* <img className='homeImg' src="/images/banner.jpg" alt="" /> */}
            <img className='homeImg' src="./images/banner1.jpg" alt="" />
            <div className="container">
                <div className="row row1">
                    <div className="product">
                        <Product
                            id="prodcuta"
                            title="Brand New Product Winter Leather Jacket"
                            price={65.20}
                            url="/images/product6.jpg"
                        />
                    </div>
                    <div className="product">
                        <Product
                            id="prodcutb"
                            title="Brand New Product Winter Leather Jacket 2"
                            price={40.50}
                            url="/images/product5.jpg"
                        />
                    </div>
                </div>

                <div className="row row2">
                    <div className="product">
                        <Product
                            id="prodcutc"
                            title="Brand New Product Winter stylish trending Jacket 3"
                            price={70.30}
                            url="/images/product4.jpg"
                        />
                    </div>

                    <div className="product">
                        <Product
                            id="prodcutd"
                            title="Brand New Product Winter Sweater "
                            price={50.45}
                            url="/images/product3.jpg"
                        />
                    </div>

                    <div className="product">
                        <Product
                            id="prodcute"
                            title="Pack of 5 Old Product Winter Sweater"
                            price={30.00}
                            url="/images/product2.jpg"
                        />
                    </div>
                </div>

                <div className="row row3">
                    <div className="product">
                        <Product
                            id="prodcutf"
                            title="Old/Used Product Sweater"
                            price={150.10}
                            url="images/product1.jpg"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Index
