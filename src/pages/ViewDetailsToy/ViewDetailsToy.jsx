import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewDetailsToy = () => {
  useTitle('KidZone | Details Toy')
  const toy = useLoaderData()
  const {category, pictureUrl, toyName, price, rating, seller, availableQuantity,
    sellerEmail,
    detailDescription } = toy;
  return (
   <div className='bg-green-300'>
     <div className='container'>
     <h2 className='text-center text-4xl text-pink-600 font-bold pt-10 '>
     VIEW DETAILS TOY</h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={pictureUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="pt-4 text-xl "><strong>Category Name:</strong> {category}</p>
            <p className="pt-4 text-xl "><strong>Seller Name:</strong> {seller}</p>
            <p className="pt-4 text-xl "><strong>Seller Email:</strong> {sellerEmail}</p>
            <p className="pt-4 text-xl "><strong>Price:</strong> ${price}</p>
            <p className="pt-4 text-xl "><strong>Available Quantity:</strong> {availableQuantity} Pis</p>
            <p className="pt-4 text-xl "><strong>Rating:</strong> {rating}</p>
            <p className="pt-4 text-xl mb-4 w-[400px] "><strong>Description:</strong> {detailDescription} stars</p>
            <Link to='/' className="btn btn-outline btn-secondary">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ViewDetailsToy;