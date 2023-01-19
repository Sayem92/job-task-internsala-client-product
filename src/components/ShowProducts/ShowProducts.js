import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const ShowProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false);

    const handleAddProduct = data => {
        setId(data.productId)

    };


    useEffect(() => {
        setLoading(true)
        fetch(`https://server-sayem92.vercel.app/product`)
            .then(res => res.json())
            .then(data => {
                if (id) {
                    const filter = data.filter(pro => pro.id === id)
                    setProducts(filter)
                    setLoading(false)
                }
                else {
                    setProducts(data)
                    setLoading(false)
                }
            })
    }, [id])

    

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='container mx-auto my-16 md:px-10'>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex justify-center items-center my-5'>
                    <div className="form-control  max-w-x mr-2">
                        <input type="number" {...register('productId', {
                            required: "Please enter product id"
                        })} className="input input-group-md input-bordered  w-full max-w-xs" placeholder="Enter product id " />
                        {errors.productId && <p className='text-red-600'>{errors.productId.message}</p>}
                    </div>

                    <input className='btn btn-accent text-white' type="submit" value='Submit' />
                </div>
            </form>


            {  products.length ?

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products?.map((product) => <tr key={product._id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                :
                <div className='container mx-auto text-center my-20'>
                    <h1 className='text-3xl text-yellow-500'>No Product Available!.
                        <span className='text-blue-500 underline'
                        ><Link to='/addProduct'> Please add any product</Link></span>
                    </h1>
                </div>
            }

            <div className='flex justify-center mt-10'>
                <Link to='/'><button className="btn btn-primary text-center ">Back Home</button></Link>
            </div>
        </div>
    );
};

export default ShowProducts;