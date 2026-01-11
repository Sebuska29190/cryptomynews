import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsdetailsCard = ({news}) => {
    const {title, image, details, categoryId} = news;

    return (
        <div className='p-5'>
            <img className='w-full h-[350px] object-cover mb-5' src={image?.asset?.url} alt="" />
            <h1 className='font-bold 2xl mb-5'>{title}</h1>
            <p>{details}</p>
            <Link to={`/category/${categoryId}`} className='btn btn-secondary mt-10'><FaArrowLeftLong />All news in this category</Link>
        </div>
    );
};

export default NewsdetailsCard;