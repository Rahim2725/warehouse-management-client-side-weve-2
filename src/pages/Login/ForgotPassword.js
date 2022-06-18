import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loading';

const ForgotPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMessage;
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    errorMessage = <p className='text-red-500'>{error?.message}</p>;


    const onSubmit = async data => {
        const { email } = data;
       await sendPasswordResetEmail(email);
    };

    if (sending) {
        return <Loading></Loading>
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })} />
                            <label>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
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