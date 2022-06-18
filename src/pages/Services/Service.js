import React from 'react';
import { useState } from 'react';

const Service = ({phone}) => {
    const {name, img, description, price, supplier_name, quantity} = phone ;

    const [seeMore, setSeeMore] = useState(false);

    const toggleBtn = () => {
        setSeeMore(more => !more);
    }



    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price: ৳{price}</p>

                <p> {seeMore ?  description : description.substr(0, 55)} <span onClick={toggleBtn} className='cursor-pointer btn btn-xs btn-outline text-red-500'>{seeMore ? 'See Less' : 'See More'}</span></p>

                <p>Quantity: {quantity}</p>
                <p>Supplier Name : {supplier_name}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Service;