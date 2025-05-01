import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Boi Poka | Home</title>
      </Helmet>

          <Banner></Banner>
          <Books></Books>
        </div>
    );
};

export default Home; <h2 className='text-5xl'>This is Home Page</h2>