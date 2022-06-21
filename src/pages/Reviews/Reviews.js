import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-10'>
            <h1 className='text-center text-3xl'>User Feedback</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    reviews.map(review => <Review
                    key={review._id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;