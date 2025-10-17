import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  items-center bg-base-200 py-3 px-5 gap-4'>
            <button className='btn btn-secondary text-[16px] font-normal'>Latest</button>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sapiente ab. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sapiente ab. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;