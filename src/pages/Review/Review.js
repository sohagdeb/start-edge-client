import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import './Review.css';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useFirebase();


    const onSubmit = data => {
        axios.post('https://enigmatic-garden-06051.herokuapp.com/review', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form className=' addService row justify-content-md-center' style={{ marginTop: '100px' }} onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-auto bg-warning p-5'>
                    {
                        user.photoURL &&
                        <div style={{ marginTop: '-120px' }} className='text-center'>
                            <img style={{ border: '7px solid #FFC107', borderRadius: '100px', width: '150px' }} src={user.photoURL} alt="" />
                        </div>
                    }
                    <input {...register("name")} value={user.displayName} placeholder='Name' />
                    <input {...register("email")} value={user.email} placeholder='Email' />
                    <input type="number" {...register("rate", { min: 0, max: 5 })} placeholder='Rating Point' />
                    <br />
                    <textarea {...register("review")} rows="4" cols="50" placeholder='Review Text' />
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Review;