import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import Loading from '../Loading/Loading';

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [allToys, setToys] = useState([])
  const [sortOrder, setSortOrder] = useState('desc');

  useTitle('KidZone | My Toys')

  useEffect(() => {
    setLoading(true)
    fetch(`https://assignment-eleven-server-hridoy281810.vercel.app/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const sortedData = data.sort((a, b) => b.price - a.price);
        setToys(sortedData)
      })
    setLoading(false)
  }, [user]);

  if (loading) {
    return <Loading></Loading>
  }

  const sortToys = (toys, order) => {
    return toys.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  const handleToggleSortOrder = () => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    const sortedData = sortToys(allToys, newSortOrder);
    setToys(sortedData);
    setSortOrder(newSortOrder);
  };
  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete data from your toy collection?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-eleven-server-hridoy281810.vercel.app/myToys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = allToys.filter(toys => toys._id !== _id)
              setToys(remaining)
            }
          })
      }
    })
  }
  return (
    <div className='container'>
      <h2 className='text-center text-4xl text-pink-600 font-bold mb-8 mt-4'>
        ALL TOYS IN MY STORE</h2>
      <div className="text-center mb-4">
        <button className="btn btn-sm btn-outline btn-secondary mr-2" onClick={handleToggleSortOrder}>
          {sortOrder === 'desc' ? 'Sort Ascending' : 'Sort Descending'}
        </button>
      </div>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allToys.map((toy, i) =>
              (

                <tr key={toy._id}>

                  <th > {i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded"> <img src={toy?.pictureUrl} /> </div>
                    </div>
                  </td>
                  <td> {toy?.seller}</td>
                  <td>{toy?.toyName} </td>
                  <td> {toy?.category} </td>
                  <td>${toy?.price}</td>
                  <td>{toy?.availableQuantity} </td>
                  <th><Link to={`/updateToys/${toy?._id}`}> <button className="btn btn-sm btn-outline btn-secondary">Update</button></Link>
                  </th>
                  <th><Link> <button onClick={() => handleDelete(toy?._id)} className="btn btn-sm btn-outline btn-secondary">Delete</button></Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;