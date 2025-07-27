import React from 'react';

import WorkGrid from '../components/WorkGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import "../index.css"

const HomeLayout = () => {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </main>
  );
};

export default HomeLayout;