import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Company from './Company';

const Home = () => {
    return (
        <div className='max-w-full mx-10 mb-10'>
            <Banner></Banner>
            <Services></Services>
            <Company></Company>
        </div>
    );
};

export default Home;