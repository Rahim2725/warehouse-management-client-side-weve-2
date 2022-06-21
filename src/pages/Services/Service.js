import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ phone }) => {

    const navigate = useNavigate();
    const { name, img, description, price, supplier_name, quantity, _id } = phone;

    const [seeMore, setSeeMore] = useState(false);

    const toggleBtn = () => {
        setSeeMore(more => !more);
    }

    const updateData = id => {
        console.log('update btn is click', id);
        navigate(`/service/${id}`)
    }


    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none border">
            <figure><img width="200px" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ৳{price}</p>

                <p> {seeMore ? description : description.substr(0, 55)}
                    <span onClick={toggleBtn}
                        className='cursor-pointer text-blue-900 font-bold underline ml-2'>
                        {seeMore ? 'See Less' : 'See More...'}
                    </span></p>

                <p>Quantity: {quantity}</p>
                <p>Supplier Name : {supplier_name}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => updateData(_id)} className="btn  rounded-none px-8 py-2" >Update</button>
                </div>
            </div>
        </div>
    );
};

export default Service;