/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const user = "mehedi hassan sizan";

    const info = {
        user,
        createUser,
        loginUser,
        googleLogIn,
        githubLogIn
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;