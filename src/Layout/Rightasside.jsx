import React from 'react';
import Sociallogin from '../Components/Social/Sociallogin';
import Findus from '../Components/Social/Findus';
import Qzone from '../Components/Social/Qzone';

const Rightasside = () => {
    return (
        <div className='space-y-5'>
            
            <Sociallogin></Sociallogin>
            <Findus></Findus> 
            <Qzone></Qzone>
        </div>
    );
};

export default Rightasside;