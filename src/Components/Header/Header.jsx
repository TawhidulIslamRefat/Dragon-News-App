import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='mt-5'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div><img src={logo} alt="" /></div>
                <p className='text-[#706F6F] text-[18px] font-normal'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-accent'>{format(new Date(),"EEEE , MMMM MM,yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;