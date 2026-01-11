import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router';
import Loading from '../Layout/Loading';

const Privateroute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
     if(loading){
        return <Loading></Loading>
     }
    if(user && user.email){
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>

    

       
           
       
    
};

export default Privateroute;