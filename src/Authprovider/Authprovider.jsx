import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Components/firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)



const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
//   for user login asekina 
 const [loading, setloading] = useState(true)


  // console.log(user, loading)
// signup user
const createuser= (email, password) =>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// signin user 
const Signin = (email, password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// signout user 
const logout = ()=>{
    signOut(auth)
}
// user profile update 
const updateuser = (updateData) =>{
  return updateProfile(auth.currentUser, updateData);
};

// user state observe 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
        setuser(currentuser)
        setloading(false)
    });
    return ()=>{
        unsubscribe();
    }
},[])
  const authData = {
    user,
    setuser,
    createuser,
    logout,
    Signin ,
    loading,
    setloading,
    updateuser 
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
