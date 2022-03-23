import React from 'react';
import { Link } from 'react-router-dom';
import './Purchase.css';

const Purchase = (props) => {
    const { name, description, img, _id, price } = props.purchase;
    const { handleDelete } = props;
    return (

        <div className="row mt-3 card2">
            <div className='col-lg-2 col-2'>
                <img src={img} width='50px' height='50px' className='mt-1 mb-1' alt="" />
            </div>
            <div className='col-lg-3 col-3 d-flex align-items-center'>
                <p>{name.slice(0, 30)}</p>
            </div>
            <div className='col-lg-2 col-2 d-flex align-items-center'>
                <div class="input-group w-auto justify-content-end align-items-center">
                    <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                    <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25" />
                    <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm lh-0" data-field="quantity" />
                </div>
            </div>
            <div className='col-lg-3 col-3 d-flex align-items-center'>
                <p>{price}$</p>
            </div>
            <div className='col-lg-1 col-1 d-flex align-items-center'>
                <Link to='/orders'>
                    <i class="far fa-share-square h4 "></i>
                </Link>
            </div>
            <div className='col-lg-1 col-1 d-flex align-items-center'>
                <Link>
                    <i onClick={() => handleDelete(_id)} class="fas fa-trash-alt h4 text-danger"></i>
                </Link>
            </div>
        </div>
    );
};

export default Purchase;