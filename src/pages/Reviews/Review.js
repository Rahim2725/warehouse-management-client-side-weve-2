import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = ({ review }) => {
    const imge = true;
    const { feedback, name, rating } = review;

    const [seeMore, setSeeMore] = useState(false);
    const toggle = () => {
        setSeeMore(yes => !yes)
    }

    return (
        <div class="card  border-2 rounded-none bg-base-100 ">
            <div class="px-2 py-2">
                <div className="flex justify-between">
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </Stack>
                    <p>13/06/2022</p>
                </div>
                <div class="divider"></div>
                <p> {seeMore ? feedback : feedback.substr(0, 55)}
                    <span onClick={toggle} className="cursor-pointer ml-2 text-blue-900 font-bold">{seeMore ? 'See less' : 'SeeMore....'}</span>
                </p>

                <div className="divider"></div>
                <div className="flex justify-around items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full">
                            <img src={imge ? 'https://api.lorem.space/image/face?hash=92310' : "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold'>Name: {name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;