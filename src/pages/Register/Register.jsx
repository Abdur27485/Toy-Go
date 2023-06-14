import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'

const Register = () => {
    const navigate = useNavigate()
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Register')
    const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            navigate('/')
        })
    }

    const handleRegister = event => {
        event.preventDefault()

        setError('');

        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const displayName = firstName + ' ' + lastName;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const password = form.password.value;
        const PasswordConfirmation = form.PasswordConfirmation.value;
        // console.log(firstName, lastName, email, password, PasswordConfirmation)
        console.log(displayName, photoURL)

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should contain at least two uppercase letters.')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password should contain At least two numbers.');
            return;
        }
        else if (/(?=.*[!@#$&*])/.test(password)) {
            setError('Password should contain atleast one special character.')
            return;
        }

        createUser(email, password)
        .then( result =>{
            const user = result.user;
        }).then( () =>{
            updateUser(displayName, photoURL)
            .then(() =>{
                console.log('profile updated')
                navigate('/')
            })
        })
    }
    return (
        <div className='lg:w-9/12 mx-auto shadow-2xl'>
            <section className="bg-white">
                <div className="lg:grid lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Night"
                            src="https://puregaming.es/wp-content/uploads/2021/02/Hot-Wheels-Unleashed.jpg.webp"
                            className="absolute inset-0 h-full w-full object-cover opacity-70"
                        />

                        <div className="hidden lg:relative lg:block lg:p-12">
                            <a className="block text-white" href="/">
                                {/* logo here */}
                            </a>

                            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome to ToyGo
                            </h2>

                            <p className="mt-4 leading-relaxed text-white/90">
                                We have a wide variety of toy cars for kids of all ages, from classic cars to modern sports cars. Whether your child is a car enthusiast or just loves to play, we have the perfect toy car for them.
                            </p>
                        </div>
                    </section>

                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-10 lg:py-12 xl:col-span-6 mb-16"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className='text-4xl font-bold text-center'>Register</h1>
                            <form onSubmit={handleRegister} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="LastName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        name="lastName"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="photoUrl"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Photo Url
                                    </label>

                                    <input
                                        type="text"
                                        id="photUrl"
                                        name="photoUrl"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="Password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="PasswordConfirmation"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="passwordConfirmation"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                {/* show error here */}
                                <div className='col-span-6 text-red-600'>
                                    {
                                        error ?
                                        <p>{error}</p>
                                        :
                                        <></>
                                    }
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        type='submit'
                                    >
                                        Create an account
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link to='/login' className="text-gray-700 underline pl-1">Log in</Link>.
                                    </p>
                                </div>
                            </form>
                            {/* google login */}
                            <hr className='my-8' />
                                <div className='flex justify-center w-1/2 mx-auto'>
                                    <button 
                                    onClick={handleGoogleSignIn}
                                    className='flex items-center gap-7 shrink-0 rounded-md border border-blue-600 px-8 lg:px-12 py-3 font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring active:text-blue-500 text-xl'>
                                        <span className='text-3xl'>
                                        <FcGoogle />
                                        </span>
                                        Sign in with Google
                                        </button>
                                </div>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
};

export default Register;