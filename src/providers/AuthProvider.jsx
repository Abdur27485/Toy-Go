import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (displayName, photoURL) =>{
        return updateProfile( auth.currentUser, {displayName, photoURL});
    };

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const data = {
        auth,
        user,
        createUser,
        loginUser,
        setUser,
        updateUser,
        googleSignIn,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
            console.log('AuthState changed!', currentUser)
        })

        return () => {
           return unsubscribe();
        }
    },[user])
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;