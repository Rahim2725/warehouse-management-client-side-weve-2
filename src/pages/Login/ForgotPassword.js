import React from 'react';

const ForgotPassword = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <input className='btn btn-primary btn-outline mt-3 w-full' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;