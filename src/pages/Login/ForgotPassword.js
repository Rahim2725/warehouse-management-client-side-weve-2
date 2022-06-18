import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ForgotPassword = () => {

    let errorMessage;
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    errorMessage = <p className='text-red-500'>{error?.message}</p>;

    const passwordRest = async (event) =>{
        event.preventDefault();
        console.log('password reset click')
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={passwordRest}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        {errorMessage}
                        <input className='btn btn-primary btn-outline mt-3 w-full' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;