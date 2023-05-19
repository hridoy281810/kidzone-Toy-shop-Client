import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import './ShopCard.css'

const ShopCard = ({ toy }) => {
  const { user } = useContext(AuthContext)

  const { _id, pictureUrl, toyName, price, rating } = toy;
  const handleViewDetailsAlert = () => {
    if (user) {
      Swal.fire({
        title: 'You can visit view details'
      })
    }
    else {
      Swal.fire({
        title: 'You have to log in first to view details '
      })
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={pictureUrl} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{toyName}</h2>
        <p className='text-xl text-pink-600'>Price: ${price}</p>
        <p className='text-xl text-pink-600'>Rating: {rating} stars</p>
        <div className="card-actions justify-end">
          <Link to={`/singleToy/${_id}`}><button onClick={handleViewDetailsAlert} className="btn btn-secondary">View Details </button></Link>
        </div>
      </div>
    </div>

  );
};

export default ShopCard;