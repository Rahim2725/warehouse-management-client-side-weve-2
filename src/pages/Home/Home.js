import React from 'react';
import Banner from '../Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='max-w-full mx-10 mb-10'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;