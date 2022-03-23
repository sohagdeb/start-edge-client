import React, { useEffect, useState } from 'react';
import DeleteReview from '../DeleteReview/DeleteReview';

const DeleteReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://enigmatic-garden-06051.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const handleDelete = id => {
        const url = `https://enigmatic-garden-06051.herokuapp.com/review/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert('Are you sure to delete');
                    const remaining = reviews.filter(service => service._id !== id);
                    setReviews(remaining);

                }

            })
    }
    return (
        <div className=' text-center'>
            <h1>Reviews</h1>
            <div className="container overflow-hidden">

                <hr />
                <div className="row gy-5">
                    {
                        reviews.map(review => <DeleteReview key={review._id} review={review} handleDelete={handleDelete}></DeleteReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DeleteReviews;