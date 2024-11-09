import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className=' min-h-[calc(100vh-242px)]  container mx-auto py-12 px-12'>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Layout;