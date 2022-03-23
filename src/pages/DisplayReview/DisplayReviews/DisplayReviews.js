import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://enigmatic-garden-06051.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=' text-center mt-5'>
            <h1>Reviews</h1>
            <div className="container overflow-hidden">

                <hr />
                <div className="row gy-5">
                    {
                        reviews.map(review => <DisplayReview key={review._id} review={review} ></DisplayReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayReviews;