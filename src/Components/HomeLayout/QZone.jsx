import React from 'react';
import image1 from '../../assets/swimming.png'
import image2 from '../../assets/class.png'
import image3 from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const QZone = () => {
    return (
        <div>
            <div className='bg-base-200 mx-3 py-5 my-8'>
            <h1 className='text-xl font-semibold px-4'>Q-Zone</h1>
            <div className='mt-5 space-y-8'>
                <img className='mx-auto' src={image1} alt="" />
                <img className='mx-auto' src={image2} alt="" />
                <img className='mx-auto' src={image3} alt="" />
            </div>
            
        </div>
        <div>
                <img className='mx-auto w-[95%]' src={bg} alt="" />
            </div>
        </div>
    );
};

export default QZone;