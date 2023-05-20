import React from 'react';
import offer from '../../../assets/lotti/service.json'
import Lottie from "lottie-react";
// import {  FaStore} from "react-icons/fa";
import { FcOnlineSupport, FcRules, FcShop } from "react-icons/fc";
const OurOffer = () => {
  return (
    <div className='container mb-24'>
      <h2 className='text-center text-4xl text-pink-600 font-bold mb-8 border-dotted '>OUR SERVICES </h2>
      <div className='md:grid md:grid-cols-2 new mt-14 '>
        <div className="w-[700px] lotti  ps-10 flex items-center">
          <Lottie animationData={offer} loop={true} />
        </div>
        <div >
          <div className='p-10 bg-pink-200 mb-6 rounded border-emerald-300 border-dotted '>
            <div className='flex items-center gap-8'>
              <span className='text-6xl'> <FcShop></FcShop></span>
              <div><h2 className='text-2xl font-bold '>
                You will find all animal toys in our store</h2>
                <p>teddy bear, horse, dinosaur, dogs, cat, unicorn, cows, etc.</p></div>
            </div>
          </div>
          <div className='p-10 bg-green-200 mb-6 rounded border-emerald-300 border-dotted '>

            <div className='flex items-center gap-8'>
              <span className='text-6xl'> <FcOnlineSupport></FcOnlineSupport></span>
              <div><h2 className='text-2xl font-bold '>
                24/7 online service </h2>
                <p>Please contact us on the below contact information to resolve any issue</p></div>
            </div>
          </div>
          <div className='p-10 bg-blue-200 mb-6 rounded border-emerald-300 border-dotted '>
            <div className='flex items-center gap-8'>
              <span className='text-6xl'> <FcRules></FcRules></span>
              <div><h2 className='text-2xl font-bold '>
                If there is any problem with the product within seven days, we will change it</h2>
                <p>After seven days, we will not provide any service</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;