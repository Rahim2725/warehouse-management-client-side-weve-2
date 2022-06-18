import React from 'react';
import { Link } from "react-router-dom"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    
    const handleLogin = event => {
        event.preventDefault();
        console.log('btn click')
        const email = event.target.email.value ;
        const password = event.target.password.value ;
        signInWithEmailAndPassword(email, password);

    }

    if(loading){
        
    }


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleLogin}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <Link to="/forgotPassword" class="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <input className='btn btn-primary w-full mt-3' type="submit" value="Login" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;