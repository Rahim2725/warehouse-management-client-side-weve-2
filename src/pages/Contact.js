import React from 'react';

const Contact = () => {
    return (
        <div className='flex h-screen justify-center items-center bg-base-200 '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <h1 className='text-2xl text-center text-primary font-bold'>Please Contact Me</h1>
                    <form>
                        <input type="email" placeholder="Email" class="input mt-3 input-bordered block w-full max-w-xs" />
                        <input type="text" placeholder="Subject" class="input mt-3 input-bordered block w-full max-w-xs" />
                        <textarea placeholder='Your Message' className='p-2 mt-3 w-full h-32 input input-bordered'></textarea>
                        <input className='btn btn-secondary btn-outline w-full mt-3' type="submit" value="Send Message" />
                    </form>
                    <div class="divider">OR</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;