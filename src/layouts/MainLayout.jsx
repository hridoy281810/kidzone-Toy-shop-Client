import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            <Header></Header>
            <div className='min-h-[calc(100vh-418px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;