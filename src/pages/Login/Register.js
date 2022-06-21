import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMessage;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    errorMessage = <p className='text-red-500'>{error?.message}</p>




    const onSubmit = data => {
        const { email, password } = data;
        createUserWithEmailAndPassword(email, password);
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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is Required'
                                }
                            })} />
                            <label>
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" {...register("email", {
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
                        </div>

                        {errorMessage}
                        <input className='btn btn-primary w-full mt-3' type="submit" value="Register" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;