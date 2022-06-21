import React from 'react';
import iphone from '../../assets/image/iphone.png'

const BestOffer = () => {
    return (
        <div class="hero mt-10 lg:mx-10 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                <div className='lg:w-2/4'>
                    <img src={iphone} class="mr-6" />
                </div>
                <div className='lg:w-2/4'>
                    <h1 class="text-5xl  font-bold">Best Offer This Year</h1>
                    <p className='text-3xl mt-2'>iPhone 14 Pro Max</p>
                    <div className='flex mt-3'>
                        <div className='border-2 px-3 py-1'>
                            <p className='text-center '>6 & 128</p>
                            <p>BDT. 87,500</p>
                            <p className='text-center uppercase'>indian</p>
                        </div>
                        <div className='border-2 px-3 py-1 ml-6'>
                            <p className='text-center '>6 & 128</p>
                            <p>USD. 850 $</p>
                            <p className='text-center '>US</p>
                        </div>
                    </div>
                    <button class="btn rounded-none mt-3">Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default BestOffer;