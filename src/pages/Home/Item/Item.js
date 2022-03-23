import { Rating } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { name, img, _id, price, star, stock } = props.car;
    const { handleCart } = props;
    return (

        <Col className='card1 mx-auto'>
            <div className="row">
                <div className='col-lg-4 col-4'>
                    <img className='mt-3 image' src={img} alt="" />
                </div>
                <div className='description-side col-lg-8 col-8 mt-3'>
                    <h5>{name.slice(0, 25)}</h5>

                    <p>{price}$</p>
                    <Rating name="read-only" value={star} readOnly />
                    <span className='ms-3'>{star}/5</span>
                    <br />
                    <p><small className='text-danger'>only {stock} left in stock - order soon</small></p>
                    <button onClick={() => handleCart(props.car)} className="button btn btn-warning">Buy Now</button>
                </div>
            </div>

        </Col >

    );
};

export default Item;