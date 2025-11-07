import React from 'react';
import Marquee from 'react-fast-marquee';

const Headline = () => {
    return (
        <div className='flex  gap-5 bg-base-200 my-10 items-center'>
            <p className='bg-secondary px-3 py-2 text-white'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis tenetur corrupti error tempore sit labore nobis, sapiente excepturi sed! Perferendis?</p>
            </Marquee>
        </div>
    );
};

export default Headline;