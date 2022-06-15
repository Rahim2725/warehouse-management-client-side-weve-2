import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from './Service';

const Services = () => {

    const { data:phones, isLoading } = useQuery('service', () =>
        fetch('http://localhost:5000/service')
            .then(res => res.json())
    );

    console.log(phones);

    if (isLoading) {
        return <p>Loading......</p>
    }
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center text-primary' >All Services</h1>
            <h1>this length: {phones?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    phones.map( phone => <Service
                    key={phone._id}></Service> )
                }
            </div>

        </div>
    );
};

export default Services;