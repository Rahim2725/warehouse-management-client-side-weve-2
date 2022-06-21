import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Company from './Company';
import BestOffer from './BestOffer';
import Contact from '../Contact'
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='max-w-full mx-10 mb-10'>
            <Banner />
            <Services />
            <Company />
            <BestOffer />
            <Reviews/>
            <Contact />
        </div >
    );
};

export default Home;