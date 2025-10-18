import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='mx-4'>
            <h1 className='text-xl font-semibold'>Find US On</h1>
            <div>
                <div className="join join-vertical w-full mt-5  h-36 py-4 ">
  <button className="btn join-item justify-start text-accent bg-white hover:bg-base-300  border-base-200"> <FaFacebook /> Facebook</button>
  <button className="btn join-item justify-start text-accent bg-white hover:bg-base-300 border-base-200"> <FaTwitter /> Twitter</button>
  <button className="btn join-item justify-start text-accent bg-white hover:bg-base-300 border-base-200"> <FaInstagram />  Instagram</button>
    </div>
            </div>
        </div>
    );
};

export default FindUs;