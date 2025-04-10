import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MDelivered from './Featured/MDelivered';
import Serve from './Component/Serve';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <MDelivered />
            <Serve />
            <Footer />
        </div>
    );
};

export default Home;