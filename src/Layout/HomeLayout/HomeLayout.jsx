import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LetestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/HomeLayout/LeftAside';
import RightAside from '../../Components/HomeLayout/RightAside';

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
            <main className='w-10/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                   <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;