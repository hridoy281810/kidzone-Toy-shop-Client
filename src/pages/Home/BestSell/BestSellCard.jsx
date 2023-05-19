import React from 'react';

const BestSellCard = ({toy}) => {
    
    const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
        sellerEmail,
        detailDescription} = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={pictureUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {toyName}!
            <div className="badge badge-secondary">sell!</div>
          </h2>
          <div className='flex justify-between items-center gap-10'>
          <p>${price}</p>
          <div style={{height:'70px', width:'70px', borderRadius: '50%'}} className='bg-pink-500 mb-10 flex justify-center items-center text-white'>
          40% off
          </div>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Add to Card</div>
            <div className="badge badge-outline">Remove to Card</div>
          </div>
        </div>
      </div>
    );
};

export default BestSellCard;