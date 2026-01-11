import React from 'react';
import swimming from '../../assets/swimming.png'
import classp from '../../assets/class.png'

import play from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div>
                <img src={swimming} alt="" />
                <img src={classp} alt="" />
                <img src={play} alt="" />
            </div>

        </div>
    );
};

export default Qzone;