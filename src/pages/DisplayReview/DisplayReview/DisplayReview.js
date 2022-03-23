import { Rating } from '@mui/material';
import React from 'react';
import './DisplayReview.css';

const DisplayReview = (props) => {
    const { name, email, review, rate } = props.review;

    return (
        <div className="col-lg-4 col-12">
            <div className="p-3 border bg-light">
                <h5>{name}</h5>
                <p>{email}</p>
                <hr />
                <div class="rating-box">
                    <h1 class="pt-4">{rate}</h1>
                    <p class="">out of 5</p>
                </div>
                <Rating name="read-only" value={rate} readOnly />
                <p>{review}</p>


            </div>
        </div>
    );
};

export default DisplayReview;