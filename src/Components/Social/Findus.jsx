import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h1 className='font-bold'>Find us on</h1>

            <div className='grid grid-cols-1 mt-3'>
                <button className='btn justify-start  bg-base-100 join-item'> <FaFacebook size={20}></FaFacebook>  Facebook</button>
                <button className='btn bg-base-100 justify-start join-item'> <FaTwitter size={20}></FaTwitter> Twitter</button>
                <button className='btn bg-base-100 justify-start join-item'> <FaInstagram size={20}></FaInstagram> Instagram</button>
                
            </div>
        </div>
    );
};

export default Findus;