import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Orders.css';


const Orders = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useFirebase();


    const onSubmit = data => {
        axios.post('https://enigmatic-garden-06051.herokuapp.com/orders', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className='gradient-custom pt-5 pb-5'>
            <div class="row mt-3 mx-3" style={{ marginTop: '25px' }}>
                <div class="col-md-3">
                    <div style={{ marginTop: '50px', marginLeft: '10px' }} class="text-center">
                        <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
                            data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
                            data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-shipping-fast text-white"></i>
                        <h3 class="mt-3 text-white">Welcome</h3>
                        <p class="white-text">You are 30 seconds away from compleating your order!</p>
                    </div>

                    <Link to='/dashboard'>
                        <div class="text-center">
                            <button type="submit" class="btn btn-white btn-rounded back-button">Go back</button>
                        </div>
                    </Link>


                </div>
                <div class="col-md-9 justify-content-center">
                    <div class="card card-custom pb-4">
                        <div class="card-body mt-0 mx-5">
                            <div class="text-center mb-3 pb-2 mt-3">
                                <h4>Delivery Details</h4>
                            </div>

                            <form class="mb-0" onSubmit={handleSubmit(onSubmit)}>

                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">


                                            <label class="form-label" for="form9Example1">Name</label>
                                            <input type="text" id="form9Example1" class="form-control input-custom" {...register("name")} value={user.displayName} placeholder='Name' />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="typeEmail">Email</label>
                                            <input type="email" id="typeEmail" class="form-control input-custom" {...register("email")} value={user.email} placeholder='Email' />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">

                                            <label class="form-label" for="form9Example4">Phone</label>
                                            <input type="number" id="form9Example4" class="form-control input-custom" {...register("phone")} placeholder='Phone' />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">

                                            <label class="form-label" for="form9Example6">Address</label>
                                            <input type="text" id="form9Example6" class="form-control input-custom" {...register("address")} placeholder='Address' />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <div class="form-outline">
                                                <label class="form-label" for="form9Example3">Information About Product</label>
                                                <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" {...register("info")} ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="float-end ">
                                    <button type="submit" class="btn btn-primary btn-rounded">Place order</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >


        </div >
    );
};

export default Orders;