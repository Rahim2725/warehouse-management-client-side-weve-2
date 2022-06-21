import React from 'react';

const BestOffer = () => {
    return (
        <div class="hero mt-10 lg:mx-10 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                <div className='lg:w-2/4'>
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class=" mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-2/4'>
                    <h1 class="text-5xl  font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BestOffer;