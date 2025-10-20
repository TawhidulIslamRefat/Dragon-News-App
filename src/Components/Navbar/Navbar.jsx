import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut} = use(AuthContext);


    const handleLogOut = () => {
      logOut()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch(error => {
        alert(error.message);
      })
    }
    return (
        <div className='flex items-center justify-between mt-5'>
            <div className='text-[16px] text-primary font-semibold'> {user && user.email}</div>
            <div className='nav space-x-5 text-[18px] font-normal text-accent'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={userIcon} alt="" />
                {
                    user ? <Link onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</Link> :<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;