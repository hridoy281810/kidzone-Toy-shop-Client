import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  const {user} = useContext(AuthContext)
   const [allToys , setAllToys] = useState([])
   const [searchText,setSearchText] = useState('')
   useTitle('KidZone | All Toys') 

   useEffect(()=>{
   fetch(`http://localhost:5000/allToys`,{
    method: 'GET'
   })
   .then(res => res.json())
   .then(data => {
    setAllToys(data)
   console.log(data)
   })
   },[])

   const handleSearchText = ()=>{
    fetch(`http://localhost:5000/toyNameSearch/${searchText}`)
    .then(res => res.json())
    .then(data => {
        setAllToys(data)
    })
  }

  const handleViewDetailsAlert = (_id)=>{
    if(user){
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
     <div className=''>
    <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>
    ALL TOYS IN OUR STORE</h2>
    <div className="overflow-x-auto w-full">
  <div className='mb-4 flex justify-center items-center gap-2'>
  <input type="text" onChange={(e)=> setSearchText(e.target.value)} placeholder="Toy Name" className="input input-bordered input-secondary w-full max-w-xs" />{' '}<button onClick={handleSearchText} className="btn btn-outline btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
  </div>
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
               {
                allToys.map((toy,i) => (
                    <tr>
                    <th>
                   {i + 1}
                    </th>
                    <td>
                    <div className="avatar">
                    <div className="w-24 rounded">
                          <img src={toy?.pictureUrl} />
                 </div>
                          </div>
                      
                    </td>
                    <td>
                   {toy?.seller}
                    </td>
                    <td>
                   {toy?.toyName}
                    </td>
                    <td>
                   {toy?.category}
                    </td>
                    <td>
                   ${toy?.price}
                    </td>
                    <td>
                   {toy?.availableQuantity}
                    </td>
                    <th>
                   <Link to={`/singleToy/${toy?._id}`}> <button onClick={()=>handleViewDetailsAlert(toy?._id)} className="btn btn-sm btn-outline btn-secondary">View Details</button></Link>
                    </th>
                  </tr>

                ))
               }
              
              </tbody>
            
     
          
        </table>
      </div>
     
     
     </div>
    );
};

export default AllToys;