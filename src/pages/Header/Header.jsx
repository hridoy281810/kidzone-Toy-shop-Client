import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo1 (2).png'
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error =>{
          console.log(error.message)
        })
      }
    return (
        <>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/allToys'>All Toys</Link></li>
        <li> <Link to='/myToys'>My Toys</Link></li>
        <li> <Link to='/addToy'>Add A Toy</Link></li>
        <li> <Link>Blogs</Link></li>
        
      </ul>
    </div>
    <div className="md:flex-1 grow header-logo">
          <Link to='/' className="  normal-case text-3xl font-bold text-pink-600 md:flex items-center ">
            <img style={{width:'120px'}} src={logo} alt="" /> TOY STORE </Link>
      
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-bold menu-horizontal px-1">
    <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
      <li> <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toys</NavLink></li>
      <li> <NavLink to='/myToys' className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toys</NavLink></li>
      <li> <NavLink  to='/addToy' className={({ isActive }) => (isActive ? 'active' : 'default')}>Add A Toy</NavLink></li>
      <li> <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user && <><div  title={user?.displayName} > <img 
        className='me-8' style={{height: '50px', width: '50px' , borderRadius: '50%', cursor: 'pointer'}} src={user?.photoURL}  alt="User Profile" />  </div>  </>
    }
     {
        user ? <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Logout</button>
        :<Link to='/login'><button className="btn btn-outline btn-secondary">Login</button></Link>
     }
    
  </div>
</div> 
        </>
    );
};

export default Header;