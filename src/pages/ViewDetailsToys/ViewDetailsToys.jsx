import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetailsToys = () => {
    
   const toy = useLoaderData()
   const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
    sellerEmail,
    detailDescription} = toy;

    return (
        <div>
    
        </div>
    );
};

export default ViewDetailsToys;