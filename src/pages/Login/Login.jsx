import React, { useContext, useState } from 'react';
import login from '../../assets/lotti/login.json'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();
  const location = useLocation()
  useTitle('KidZone | Login')
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    setError('')
    setSuccess('')
    if (password.length < 6) {
      setError('Enter minimum six digit password')
    }
    loginUser(email, password)
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser)
        setSuccess('You have successfully login, Welcome to our website')
        navigate(from, { replace: true })
      })
      .catch(error => {
        const warning = error.message;
        setError(warning)
      })
  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser)
        setSuccess('You have successfully login, Welcome to our website')
        navigate(from, { replace: true })
      })
      .catch(error => {
        const warning = error.message;
        setError(warning)
      })
  }
  return (
    <div className='bg-pink-500 '>
      <div className='container'>
        <div className="hero min-h-screen 0">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-[500px] lotti flex items-center">
              <Lottie animationData={login} loop={true} />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body card-body2">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input1 input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input1 input-bordered" />
                  </div>
                  <p className='text-red-700 label-text-alt mt-2'>{error}</p>
                  <p className='text-green-700 label-text-alt'>{success}</p>
                  <div className="form-control mt-4">
                    <label>
                      <p className="label-text-alt "> Don't Have an Account? <Link to='/register' className='text-pink-600'>Registration</Link> </p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-xl my-4'>OR</p>
                      <button onClick={handleGoogleLogin} className="btn input1 btn-circle btn-outline btn-secondary text-2xl"> G </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;