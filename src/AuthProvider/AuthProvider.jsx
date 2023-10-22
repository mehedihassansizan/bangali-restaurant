/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() =>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    const info = {
        user,
        createUser,
        loginUser,
        googleLogIn,
        githubLogIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;