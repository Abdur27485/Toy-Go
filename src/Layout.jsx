import React from 'react';
import Navbar from './components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;