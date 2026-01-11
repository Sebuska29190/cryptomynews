import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const Forgetpasswor = () => {
    const {resetpassword} = useContext(AuthContext)
     const [massege, setmassege] = useState('')
     const [error, seterror] = useState('')
    const handlereset = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
   if(!email){
    seterror('Please enter your email address.');
        return;
   }
    resetpassword(email)
    .then(()=>{
        
        setmassege("Password reset email sent! Please check your inbox.")
        form.reset()
    })
    .catch(error=>{
        console.log(error)
    })
    }
    return (
       <div className='flex justify-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <form onSubmit={handlereset} className="card-body">
                 <fieldset className="fieldset">
                   {/* Email */}
                   <label className="label">Email</label>
                   <input name='email' type="email" className="input" placeholder="Email" />
                  
                   <button type="submit" className="btn btn-neutral mt-4">Reset Password</button>
                   {error && <p>{error}</p>}
                  {massege && <p>{massege}</p> } 
                 </fieldset>
               </form> 
               
             </div>
           </div>
    );
};

export default Forgetpasswor;