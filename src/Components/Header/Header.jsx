import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center gap-3'>
                <img className='w-[350px]' src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p>{format(new Date(),"EEEE,MMMM d,YYY")}</p>
                
            </div>
        </div>
    );
};

export default Header;