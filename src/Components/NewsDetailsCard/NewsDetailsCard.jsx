import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    
    return (
        <div className='border-1 border-base-200 p-10 mt-6'>
            <img className='w-full' src={news.image_url} alt="" />
            <h1 className="text-2xl font-bold mb-3 leading-tight my-6">{news.title}</h1>
            <p className="text-[16px] font-normal  text-accent leading-8 my-6">{news.details}</p>
            <Link to={`/category/${news.category_id}`}  className='btn btn-secondary'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;