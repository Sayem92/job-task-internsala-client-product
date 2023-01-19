import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleAddProduct = data => {

                    const product = {
                        name: data.productName,
                        price: data.price,
                        id : data.productId
                  
                    }

                    console.log(product);
                    

                    // sava information to the database----------
                    fetch(`http://localhost:5000/addProduct`, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.productName} info save successful`);
                            navigate('/showProducts')
                           
                        })
                
    };


    return (
        <div className='pr-1 py-16 md:w-96 mx-auto'>
        <h2 className="text-3xl font-semibold ml-8 text-center">Add A Product</h2>
        <div className='md:w-96 p-7 shadow-xl mx-2'>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                {/* product id */}
                <div className="form-control w-full max-w-x">
                    <label className="label"> <span className="label-text ">Product Id</span>
                    </label>
                    <input type="number" {...register('productId', {
                        required: "Please enter product id"
                    })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="Enter Product id " />
                    {errors.productId && <p className='text-red-600'>{errors.productId.message}</p>}
                </div>
                
                {/* productName */}
                <div className="form-control w-full max-w-x">
                    <label className="label"> <span className="label-text ">Product Name</span>
                    </label>
                    <input type="text" {...register('productName', {
                        required: "Please enter product name"
                    })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="Product name" />
                    {errors.productName && <p className='text-red-600'>{errors.productName.message}</p>}
                </div>
               
                {/* Price */}
                <div className="form-control w-full max-w-x">
                    <label className="label"> <span className="label-text ">Price</span>
                    </label>
                    <input type="number" {...register('price', {
                        required: "Please enter price"
                    })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="price" />
                    {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                </div>

                <input className='mt-3 btn btn-accent text-white w-full' type="submit" value='Submit' />

                <Link to='/'><button className="btn btn-primary w-full mt-3">Back Home</button></Link>

            </form>
        </div>
    </div>
    );
};

export default AddProducts;