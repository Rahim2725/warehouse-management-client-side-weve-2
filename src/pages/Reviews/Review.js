import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = ({ review }) => {
    console.log(review)
    const { feedback, name, rating } = review;
    return (
        <div class="card  border-2 rounded-none bg-base-100 ">
            <div class="px-2 py-2">
                <div>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </Stack>
                    <div class="divider"></div>

                </div>
                <p>{feedback}</p>
                <div>
                    <img src="" alt="" />
                    <h1 className='font-bold'>{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;