import React from 'react';

const AddReview = () => {

  

    return (
        <div className='flex justify-center '>
            <div className='border-4 p-10 w-5/12'>
                <h1 className='text-center text-3xl font-bold'>Your FeedBack </h1>
                <div className=' shadow-xl border mt-3 p-4'>
                    <form >
                        <input type="number" placeholder="Rating" className="input input-bordered w-full"  />
                        <textarea class="textarea mt-3 textarea-bordered w-full " placeholder="Your Feedback"></textarea>
                        <input type="submit" value="Send" class="btn rounded-none mt-3 block w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;