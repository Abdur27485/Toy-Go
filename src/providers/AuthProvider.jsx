import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
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
    const data = {
        auth,
        user,
        createUser,
        loginUser,
        setUser,
        updateUser
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