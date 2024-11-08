import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className=' min-h-[calc(100vh-242px)]'>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Layout;