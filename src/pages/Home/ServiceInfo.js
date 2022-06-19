import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading';

const ServiceInfo = () => {
    const { serviceId } = useParams();

    const { data: service, isLoading } = useQuery('service', () =>
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>this is data {service?._id} </h1>
        </div>
    );
};

export default ServiceInfo;