import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Components/firebase/Firebase.config';

export const AuthContext = createContext();
const auth = app ? getAuth(app) : null;



const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
//   for user login asekina 
 const [loading, setloading] = useState(true)


  // console.log(user, loading)
// signup user
const createuser= (email, password) =>{
    if (!auth) return Promise.reject(new Error('Firebase not initialized'));
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// signin user
const Signin = (email, password) =>{
    if (!auth) return Promise.reject(new Error('Firebase not initialized'));
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// signout user
const logout = ()=>{
    if (!auth) return;
    signOut(auth)
}
// user profile update
const updateuser = (updateData) =>{
  if (!auth || !auth.currentUser) return Promise.reject(new Error('No user or Firebase not initialized'));
  return updateProfile(auth.currentUser, updateData);
};
// sign in with Google

const googlesignin = ()=>{
if (!auth) return Promise.reject(new Error('Firebase not initialized'));
const provider = new GoogleAuthProvider()
return signInWithPopup(auth, provider)
}
// sign in with Github
const githubsignin = ()=>{
  if (!auth) return Promise.reject(new Error('Firebase not initialized'));
  const prov = new GithubAuthProvider()
  return signInWithPopup(auth, prov)
}

// Passwordreset
const resetpassword =(email)=>{
  if (!auth) return Promise.reject(new Error('Firebase not initialized'));
  setloading(true)
  return sendPasswordResetEmail(auth, email)
}



// user state observe
useEffect(()=>{
    if (!auth) {
        setuser(null);
        setloading(false);
        return;
    }
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
    updateuser,
    googlesignin,
    githubsignin,
    resetpassword
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
