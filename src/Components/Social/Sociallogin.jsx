import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

const Sociallogin = () => {
    return (
        <div>
            <div className='space-y-3 mt-5'>
                <h1 className='font-bold'>Login with</h1>
                <button className='btn btn-outline btn-primary w-full'> <FcGoogle size={24} />Login with Google</button>
                <button className='btn btn-outline btn-secondary  w-full'><SiGithub size={24} />Login with Github</button>
            </div>
        </div>
    );
};

export default Sociallogin;