import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()

//auth and providers
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()


const AuthProvider = ({ children }) => {

    //states
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [day, setDay] = useState(true)

    //handlers
    //1
    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //2
    const signInwithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    //3
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //4
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //5
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //7
    const LogOut = () => {
        setLoading(true)
        signOut(auth)
    }

    // this hook is for triggering and change the state for login and logout.
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    //the value and function you want to distribute put in authInfo
    const authInfo = {
        user,
        error,
        loading,
        day,
        setDay,
        setUser,
        signInwithGoogle,
        signInwithGithub,
        createUser,
        signInWithEmail,
        LogOut,
        setError,
        updateUserProfile,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;