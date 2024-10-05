import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">  
        <Navbar />
      </header>
      <main className="flex-grow relative"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;