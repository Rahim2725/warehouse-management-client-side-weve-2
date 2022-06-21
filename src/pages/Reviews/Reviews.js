import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';
import Loading from '../../components/Loading'

const Reviews = () => {

    const { data: reviews, isLoading, } = useQuery('review', () =>
        fetch('http://localhost:5000/review')
            .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-10'>
            <h1 className='text-center text-3xl'>User Feedback</h1>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;