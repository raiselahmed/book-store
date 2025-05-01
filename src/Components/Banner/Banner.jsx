import React from 'react';
import bannerImg from '../../assets/Images/book_of_bnner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-10 md:px-20 md:py-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
            
            <button className="btn btn-primary mt-10">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;