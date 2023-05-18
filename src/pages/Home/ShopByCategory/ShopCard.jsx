import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({toy}) => {

    const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
        sellerEmail,
        detailDescription} = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={pictureUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{toyName}</h2>
          <p className='text-xl text-pink-600'>Price: ${price}</p>
          <p className='text-xl text-pink-600'>Rating: {rating} stars</p>
          <div className="card-actions justify-end">
            <Link to={`/singleToy/${_id}`}><button className="btn btn-secondary">View Details </button></Link>
          </div>
        </div>
      </div>
      
    );
};

export default ShopCard;