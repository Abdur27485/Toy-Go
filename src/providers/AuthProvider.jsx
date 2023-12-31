import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName, photoURL });
    };

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                Swal.fire(
                    'Logged in!',
                    'You have successfully Logged in',
                    'success'
                )
            })
    }

    const changeTitle = title => {
        useEffect(() => {
            document.title = `ToyGo | ${title}`
        }, [title])
    }

    //loading allToys data
    const [allToys, setAllToys] = useState(null);
    useEffect(() => {
        fetch('https://toygo-server.vercel.app/toy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const data = {
        auth,
        user,
        allToys,
        createUser,
        loginUser,
        setUser,
        updateUser,
        googleSignIn,
        changeTitle,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('AuthState changed!', currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;