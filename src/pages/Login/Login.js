import React from 'react';
import { Link } from "react-router-dom"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    errorMessage = <p className='text-red-500'>{error?.message}</p>


   

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
    };

    if (loading) {
        <Loading></Loading>
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

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="Password" class="input input-bordered" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                }
                            })} />
                            <label>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <label class="label">
                                <Link to="/forgotPassword" class="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        {errorMessage}
                        <input className='btn btn-primary w-full mt-3' type="submit" value="Login" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;