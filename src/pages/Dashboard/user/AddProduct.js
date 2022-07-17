import React from 'react';

const AddProduct = () => {
    return (
        <div className='flex justify-center '>
            <div  className=' w-5/12 shadow-xl  rounded-lg border mt-3 p-4'>
                <h1 className='text-center text-3xl mb-3 font-bold '>Add New Product </h1>
                <div>
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