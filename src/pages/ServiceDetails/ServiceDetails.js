import React from 'react';
import { useQuery } from 'react-query';
const ServiceDetails = () => {

    const { data: phones, isLoading, refetch } = useQuery('service', () =>
        fetch('http://localhost:5000/service')
            .then(res => res.json())
    );

    if (isLoading) {
        return <p>Loading......</p>
    }
    const deletePhone = id => {
       console.log(id);
    }

    return (
        <div className='max-w-full mx-10'>
            <h1 className='text-3xl text-center mb-10 text-primary'>Latest Official Phones Details</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Supplier Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            phones.map((phone, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{phone.name}</td>
                                    <td> <img className='w-20 h-20' src={phone.img} alt="" /></td>
                                    <td>৳{phone.price}</td>
                                    <td>{phone.supplier_name}</td>
                                    <td className='cursor-pointer' onClick={() => deletePhone(phone._id)}>X</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ServiceDetails;