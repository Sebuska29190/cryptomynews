import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Authprovider/Authprovider';

const Register = () => {
  const {createuser , setuser, updateuser } = useContext(AuthContext)
    // user regi por take home page a niye jawa
    const usernavi = useNavigate();
  const handleform = (e) =>{
     e.preventDefault ();
     const form = e.target;
     const name  = form.name.value;
     const photo   = form.photo.value;
     const email  = form.email.value;
     const password  = form.password.value;
    //  console.log(name, photo, email, password)
  


     createuser(email, password)
     .then((result)=>{
      const user = result.user;
      // console.log(user)
      // for update user profile
      updateuser({displayName:name, photoURL:photo}).then(()=>{
        // user jokhon ase tokon tar name,pt thake na , agula pawar jonno
        setuser({...user,displayName:name, photoURL:photo});
         // user regi por take home page a niye jawa
         usernavi("/") 
      }).catch(error =>{
        console.log(error)
        setuser(user)
      })
        
     })
     .catch(error =>{
      alert(error)
     })
  }
    return (
    <div className='flex justify-center min-h-screen items-center'>
       
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h2 className='font-semibold text-2xl text-center mt-2'>Register your account</h2>
      <form onSubmit={handleform} className="card-body">  
        <fieldset className="fieldset">
              {/* Name */}
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Your name" required />
            {/*Photo url */}
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo url" required/>
            {/* Email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div className='py-2 justify-center items-center'>
            <input className='m-2' type="checkbox" name="" id="" /> 
            <span className='p-2'>Accept term & condition</span>
            </div>
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center py-3'>Already Have An Account ?<Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
    );
};

export default Register;