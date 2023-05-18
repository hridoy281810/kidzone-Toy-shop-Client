
import React, { useContext, useState } from 'react';
import login from '../../assets/lotti/login.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
 const {createUser} = useContext(AuthContext)
 const [error, setError] = useState('')
 const [success, setSuccess] = useState('')
    const handleRegistration = event =>{
   event.preventDefault()
   const form = event.target;
   const name = form.name.value;
   const email = form.email.value;
   const password = form.password.value;
   const photo = form.photo.value;
   console.log(name, name,email,photo)
   setError('')
   setSuccess('')
   if(password.length < 8){
    setError('Enter minimum six digit password')
   }
   createUser(email,password)
   .then(result => {
    const createdUser = result.user;
    console.log(createdUser)
    setSuccess('You have successfully created the account, Welcome to our website')

  })
  .catch(error => {
    const warning = error.message;
    setError(warning)
  })
     
    }
 
   
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[500px]  flex items-center">
          <Lottie animationData={login} loop={true} />
              </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleRegistration}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
             
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
               
              </div>
              <p className='text-red-700 label-text-alt mt-2'>{error}</p>
                <p className='text-green-700 label-text-alt'>{success}</p>
              <div className="form-control mt-4">
              <label>
                  <p  className="label-text-alt "> Already Have an Account? <Link to='/login' className='text-pink-600'>Login</Link> </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;