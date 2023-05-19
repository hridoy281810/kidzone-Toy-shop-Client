import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateMyToy = () => {
  const toy = useLoaderData()
  useTitle('KidZone | Update Toy') 
  console.log(toy._id)        
  const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
    sellerEmail,
    detailDescription} = toy;
    const handleUpdate = event=>{
        event.preventDefault();
        const form = event.target;
        const pictureUrl =form.pictureUrl.value ;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const toyDetails = {
    pictureUrl,
    toyName,
    price,
    rating,
    availableQuantity,
    detailDescription
        }
        fetch(`http://localhost:5000/update/${_id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.modifiedCount > 0 ){
                alert('updated succfulli')
               }
          })
    }
    return (
        <div className="bg-base-200">
        <div className="">

          <div className="">
            <div className="card-body">
            <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>
          UPDATE YOUR TOY COLLECTION</h2>
            <form onSubmit={handleUpdate} >

           <div className='md:grid md:grid-cols-3 gap-6'>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" defaultValue='https://i.ibb.co/DWKwyTW/tedi3.jpg' name='pictureUrl' placeholder="photo url" className="input input-bordered" />
               
              </div>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input type="text" defaultValue={toyName} placeholder="toyName" name='toyName' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input type="number" defaultValue={availableQuantity} name='availableQuantity' placeholder="Available Quantity" className="input input-bordered" />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <textarea  name='detailDescription' className="textarea" placeholder="Detail Description"></textarea>
              </div>
           </div>
           <button className="btn btn-block btn-outline btn-secondary">Update Now</button>
            
             
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateMyToy;