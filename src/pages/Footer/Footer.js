import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }} >

                <div class="container p-4 pb-0">

                    <section class="">

                        <div class="row">

                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h1 class="text-uppercase mb-4 font-weight-bold">
                                    <span className='text-danger'>STAR</span><span className='text-warning'>EDGE</span>
                                </h1>

                            </div>


                            <hr class="w-100 clearfix d-md-none" />


                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a class="text-white">Laptop</a>
                                </p>
                                <p>
                                    <a class="text-white">Camera</a>
                                </p>
                                <p>
                                    <a class="text-white">Mobile</a>
                                </p>
                                <p>
                                    <a class="text-white">DeskTop</a>
                                </p>
                            </div>


                            <hr class="w-100 clearfix d-md-none" />


                            <hr class="w-100 clearfix d-md-none" />


                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i class="fas fa-home mr-3"></i> Sylhet,Bangladesh</p>
                                <p><i class="fas fa-envelope mr-3"></i> staredge@gmail.com</p>
                                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>


                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-facebook-f"></i
                                ></a>


                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-twitter"></i
                                ></a>


                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-google"></i
                                ></a>


                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#ac2bac' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-instagram"></i
                                ></a>

                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#0082ca' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-linkedin-in"></i
                                ></a>

                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#333333' }}
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-github"></i
                                ></a>
                            </div>
                        </div>

                    </section>

                </div>


                <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a class="text-white" href="#">Star Edge</a>
                </div>

            </footer>

        </div >

    );
};

export default Footer;