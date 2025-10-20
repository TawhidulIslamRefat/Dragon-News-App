import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] py-1 min-h-screen'>
            <div className='w-10/12 mx-auto '>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='my-35'>
                <Outlet></Outlet>
            </main>
        </div>
        </div>
    );
};

export default AuthLayout;