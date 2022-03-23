import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import './product.css';

const Product = (props) => {
    const { name, description, img, _id, price, star, features, stock } = props.product;
    const { handleCart } = props;
    // console.log(features.map(feature => (console.log(feature))));
    return (
        <Col className='colCart mt-5'>
            <div class="height d-flex justify-content-center align-items-center">
                <div class="card p-3">
                    <div class="d-flex justify-content-between align-items-center ">
                        <div class="mt-2">
                            {/* <h4 class="text-uppercase">Ikea</h4> */}
                            <div class="mt-5">
                                {/* <h5 class="text-uppercase mb-0">Blanda Matt</h5> */}
                                <h5 class="main-heading mt-0 text-danger me-2">{name.slice(0, 15)}</h5>

                                <p>Stock:{stock} left</p>
                            </div>
                        </div>
                        <div class="image"> <img className='product-img' src={img} />
                            <div style={{ borderTopStyle: 'groove' }} class="d-flex flex-row user-ratings">
                                <div class="ratings">  <Rating name="read-only" value={star} readOnly /> </div>
                            </div> </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2 mb-2"> <h5>{price}$</h5>
                        <div class="colors"> <span></span> <span></span> <span></span> <span></span> </div>
                    </div>
                    <button onClick={() => handleCart(props.product)} class="btn btn-danger">Add to cart</button>
                </div>
            </div>
        </Col >
    );
};

export default Product;