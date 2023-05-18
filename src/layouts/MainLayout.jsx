import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';

const MainLayout = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;