import React from 'react';

import WorkGrid from '../components/WorkGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
    <Hero></Hero>
    <WorkGrid></WorkGrid>
    
    </>
  );
};

export default Home;