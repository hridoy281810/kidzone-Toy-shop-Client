import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddAToy = () => {
  const { user } = useContext(AuthContext)
  useTitle('KidZone | Add A Toy')
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const toyName = form.toyName.value;
    const seller = form.seller.value;
    const email = user?.email;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const toyDetails = {
      pictureUrl,
      toyName,
      seller,
      email,
      category,
      price,
      rating,
      availableQuantity,
      detailDescription,
    }
    fetch(`https://assignment-eleven-server-hridoy281810.vercel.app/postToy`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toyDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId || toyDetails) {
          Swal.fire(
            'Good job!',
            'Your toy added is complete!',
            'success'
          )
        }
      })

  }
  return (
    <div className='bg-green-300'>
      <div className=" container">
        <div className="">
          <div className="card-body">
            <h2 className='text-center text-4xl text-pink-600 font-bold mb-8 '> ADD A NEW TOY FOR YOUR TOY COLLECTION</h2>
            <form onSubmit={handleSubmit} >
              <div className='md:grid md:grid-cols-3 gap-6'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="url" defaultValue='https://i.ibb.co/DWKwyTW/tedi3.jpg' name='pictureUrl' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input required type="text" placeholder="toyName" name='toyName' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input required type="text" defaultValue={user?.displayName} placeholder="seller name" name='seller' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input required type="email" defaultValue={user?.email} name='sellerEmail' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub-Category</span>
                  </label>
                  <input required type="text" name='category' placeholder="Sub-Category" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input required type="text" name='price' placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input required type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input required type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered" />
                </div>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Detail Description</span>
                  </label>
                  <textarea required name='detailDescription' className="textarea" placeholder="Detail Description"></textarea>
                </div>
              </div>
              <button className="btn btn-block btn-outline btn-secondary">Add Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;