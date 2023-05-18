import React, { useEffect, useState } from 'react';

const AllToys = () => {
  
    // const {_id,category,pictureUrl,toyName, price, rating, seller,  availableQuantity,
    //     sellerEmail,
    //     detailDescription} = toy;
   const [allToys , setAllToys] = useState()

   useEffect(()=>{
   fetch(`http://localhost:5000/allToys`)
   .then(res => res.json())
   .then(data => {
    setAllToys(data)

   })
   },[allToys])

    return (
     <div className=''>
    <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>
    ALL TOYS IN OUR STORE</h2>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Toy Picture</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          
          </tbody>
          
        </table>
      </div>
     
     
     </div>
    );
};

export default AllToys;