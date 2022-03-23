import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';

const Products = () => {
    // const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://enigmatic-garden-06051.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = cart => {
        // console.log(cart.price);
        axios.post('https://enigmatic-garden-06051.herokuapp.com/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Row xs={1} md={4} className="g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;