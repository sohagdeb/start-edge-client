import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Purchase from '../Purchase/Purchase';

const Purchases = () => {
    const [purchases, setPurchases] = useState([]);
    // console.log(purchases.map(purchase => purchase.price[0] + purchase.price[1]));
    useEffect(() => {
        const url = 'https://enigmatic-garden-06051.herokuapp.com/cart'
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [])
    const handleDelete = id => {
        const url = `https://enigmatic-garden-06051.herokuapp.com/cart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete');
                    const remaining = purchases.filter(service => service._id !== id);
                    setPurchases(remaining);
                    window.location.reload(true);
                }

            })
    }
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-1 g-4">
                {
                    purchases.map(purchase => <Purchase key={purchase.id} purchase={purchase} handleDelete={handleDelete}></Purchase>)
                }
            </div>
        </div>
    );
};

export default Purchases;