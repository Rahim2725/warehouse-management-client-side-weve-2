import React from 'react';
import { Link } from "react-router-dom"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading';
import { useForm } from 'react-hook-form';


const Login = () => {

    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    errorMessage = <p className='text-red-500'>{error?.message}</p>

    console.log(user);

    // use normal login from 
    // const handleLogin = event => {
    //     event.preventDefault();
    //     console.log('btn click')
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     signInWithEmailAndPassword(email, password);

    // }
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                            <input {...register("firstName", { required: true })} />
                            {errors.firstName?.type === 'required' && "First name is required"}
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>

                            <input {...register("lastName", { required: true })} />
                            {errors.lastName && "Last name is required"}

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