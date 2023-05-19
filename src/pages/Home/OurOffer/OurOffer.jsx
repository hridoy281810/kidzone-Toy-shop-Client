import React from 'react';
import offer from '../../../assets/lotti/gift (1).json'
import Lottie from "lottie-react";
const OurOffer = () => {
  return (
    <div className='container'>
      <h2 className='text-center text-4xl text-pink-600 font-bold mb-8 border-dotted '>OUR OFFER </h2>
      <div className='md:grid md:grid-cols-2 new'>
        <div className="w-[700px] lotti  ps-10 flex items-center">
          <Lottie animationData={offer} loop={true} />
        </div>
        <div >
          <div className='p-10 bg-pink-200 mb-6 rounded border-emerald-300 border-dotted '>
            <h2 className='text-2xl font-bold '>
              Toys and Games</h2>
            <p>Mauris vitae erat non nisi consequat</p>
          </div>
          <div className='p-10 bg-green-200 mb-6 rounded border-emerald-300 border-dotted '>
            <h2 className='text-2xl font-bold '>
              Toddlers Clothing & Accessories</h2>
            <p>Mauris vitae erat non nisi consequat</p>
          </div>
          <div className='p-10 bg-blue-200 mb-6 rounded border-emerald-300 border-dotted '>
            <h2 className='text-2xl font-bold '>
              Strollers & Ride-Ons</h2>
            <p>Mauris vitae erat non nisi consequat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;