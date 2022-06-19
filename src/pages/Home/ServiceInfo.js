import React from 'react';
import { useParams } from 'react-router-dom'

const ServiceInfo = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div>
            <h1>this is data </h1>
        </div>
    );
};

export default ServiceInfo;