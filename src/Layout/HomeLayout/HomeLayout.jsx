import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LetestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-10/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-10/12 mx-auto my-3'>
                <Navbar></Navbar>
            </section>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                   <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;