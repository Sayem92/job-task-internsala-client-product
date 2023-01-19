import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center my-52'>
            <Link to='/addProduct'>
            <button className="btn btn-success mr-5">Add Products</button>
            </Link>
            <Link to='/showProducts'><button className="btn btn-warning">Show Products</button></Link>
        </div>
    );
};

export default Home;