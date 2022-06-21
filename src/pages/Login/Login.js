import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Loading from '../../components/Loading';
import auth from '../../firebase.init';


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
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })} />
                            <label>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="Password" className="input input-bordered" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                }
                            })} />
                            <label>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <label className="label">
                                <Link to="/forgotPassword" className="label-text-alt link link-hover">Forgot password?</Link>
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