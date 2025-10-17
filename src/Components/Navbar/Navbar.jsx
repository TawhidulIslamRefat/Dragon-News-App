import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-5'>
            <div className=''></div>
            <div className='nav space-x-5 text-[18px] font-normal text-accent'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;