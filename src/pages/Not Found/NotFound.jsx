import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const { changeTitle } = useContext(AuthContext);
    changeTitle('Not Found')
    return (
        <div className='overflow-hidden max-h-screen flex justify-center flex-col items-center'>
            <img src='https://i.ibb.co/3sp7wF4/Pngtree-template-internet-banner-with-glitch-5993589.png' className=' w-screen lg:w-2/5 mx-auto max-h-[50vh]' />
            <Link to='/'>
                <button className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring'>
                    Go Back To Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;