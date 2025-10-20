import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
       console.log(user);
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }; 

    const logOut = () => {
        return signOut(auth);
    };
 
   useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser);
    });
    return () => {
        unsubcribe();
    };
   },[])





    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
    }
    return <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
};

export default AuthProvider;