import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewDetailsToys = () => {
  useTitle('KidZone | Details Toy') 
   const toy = useLoaderData()
   const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
    sellerEmail,
    detailDescription} = toy;

    return (
    <div className='container'>
          
          <div className="hero min-h-screen bg-base-200">
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
       
    );
};

export default ViewDetailsToys;