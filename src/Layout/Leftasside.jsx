import React, { Suspense } from 'react';
import Categories from './Categories';

const Leftasside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>



        </div>
    );
};

export default Leftasside;