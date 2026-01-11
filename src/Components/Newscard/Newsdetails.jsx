import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Rightasside from '../../Layout/Rightasside';
import { useLoaderData, useParams } from 'react-router';
import NewsdetailsCard from './NewsdetailsCard';

const Newsdetails = () => {
    const news = useLoaderData();
    const { id } = useParams()
    // console.log(news, id)
    return (
        <div>
            <header className='py-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-10'>
                <section className='col-span-9'>
                   <NewsdetailsCard news={news}></NewsdetailsCard> 
                </section>
                <aside className='col-span-3'>
                    <Rightasside></Rightasside>
                </aside>
            </main>
        </div>
    );
};

export default Newsdetails;