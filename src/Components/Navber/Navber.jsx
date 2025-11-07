import React, {  useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userpic from '../../assets/user.png'
import { AuthContext } from '../../Authprovider/Authprovider';

const Navber = () => {
   const {user, logout} = useContext(AuthContext)
//    user logout 
const handlelogout = ()=>{
 logout()
 .then(() => {
  alert("You successfully logout")
}).catch((error) => {
  console.log(error)
});
}
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav gap-5 flex text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className=" flex gap-2  p-5">
                <img className='w-12 rounded-full' src={`${user? user.photoURL :userpic}`} alt="" />
                {
                    user ? <button onClick={handlelogout} className='btn btn-primary'>Logout</button> : <Link to='/auth/login' className='btn btn-primary'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navber;