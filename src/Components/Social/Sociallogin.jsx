import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { AuthContext } from '../../Authprovider/Authprovider';


const Sociallogin = () => {
    const {googlesignin, githubsignin, user} = useContext(AuthContext)
    const handlegoogle = ()=>{
       googlesignin()
       .then(result=>{
        console.log(result.user)
       }).catch(error=>{
        console.log(error)
       })
    }

    const handlegithubsignin = ()=>{
        githubsignin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
           {user? "":   <div className='space-y-3 mt-5'>
                
                <h1 className='font-bold'>Login with</h1>
               <button onClick={handlegoogle} className='btn btn-outline btn-primary w-full'> <FcGoogle size={24} />Login with Google</button>
                <button onClick={handlegithubsignin} className='btn btn-outline btn-secondary  w-full'><SiGithub size={24} />Login with Github</button>
               
            </div>} 
          
        </div>
    );
};

export default Sociallogin;