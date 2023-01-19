import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-48'>
            <h2 className="text-3xl font-semibold  text-center">Welcome to Home Page</h2>
            <div className='flex justify-center mt-16 '>
              
                    <Link to='/addProduct'>
                        <button className="btn btn-success hover:bg-green-500 mr-5">Add Products</button>
                    </Link>
                    <Link to='/showProducts'><button className="btn btn-warning hover:bg-yellow-500">Show Products</button></Link>
              
            </div>
        </div>
    );
};

export default Home;