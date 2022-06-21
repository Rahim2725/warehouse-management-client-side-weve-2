import React from 'react';

const AddProduct = () => {
    return (
        <div className='flex justify-center '>
            <div className='border-4 p-10'>
                <h1 className='text-center text-3xl font-bold'>Add New Product Details </h1>
                <div className=' shadow-xl border mt-3 p-4'>
                    <form >
                        <input type="text" placeholder="Product Name" class="input input-bordered block w-full" />
                        <input type="number" placeholder="Product Price" class="input input-bordered mt-3 block w-full" />
                        <textarea class="textarea mt-3 textarea-bordered w-full " placeholder=" Product Description"></textarea>
                        <input type="text" placeholder="Suppler Name" class="input input-bordered mt-3 block w-full" />
                        <input type="number" placeholder="Quantity" class="input input-bordered mt-3 block w-full" />
                        <input type="text" placeholder="Image URL" class="input input-bordered mt-3 block w-full" />
                        <input type="submit" value="Add Product" class="btn rounded-none mt-3 block w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;