import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate()
    const { changeTitle } = useContext(AuthContext);
    changeTitle('Login')
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
        navigate('/')
        })
    }

    const handleLogin = event => {
        event.preventDefault()

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(firstName, lastName, email, password, PasswordConfirmation)


        loginUser(email, password)
            .then(result => {
                const userInfo = result.user;
                Swal.fire(
                    'Logged in!',
                    'You have successfully Logged in',
                    'success'
                )
                navigate('/')
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Password is incorrect')
                }
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError(<p>Your email is incorrect or isn't registered yet. <Link to='/register' className="text-gray-700 underline pl-1">Register</Link></p>)
                }
            })
    }
    return (
        <div className='lg:w-9/12 mx-auto shadow-2xl lg:mt-8'>
            <section className="bg-white">
                <div className="lg:grid lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Night"
                            src="https://puregaming.es/wp-content/uploads/2021/02/Hot-Wheels-Unleashed.jpg.webp"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="relative -mt-16 hidden lg:block ml-3 text-white mb-3">
                            <h1
                                className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl"
                            >
                                Welcome to ToyGo
                            </h1>

                            <p className="mt-4 leading-relaxed">
                                We have a wide variety of toy cars for kids of all ages, from classic cars to modern sports cars. Whether your child is a car enthusiast or just loves to play, we have the perfect toy car for them.
                            </p>
                        </div>
                    </section>

                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 mb-16 lg:mb-0"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className='text-4xl font-bold text-center'>Login</h1>
                            <form onSubmit={handleLogin} className="mt-20 lg:mt-20 grid grid-cols-6 gap-6">

                                <div className="col-span-6">
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

                                <div className="col-span-6">
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


                                {/* show error here */}
                                {
                                    error ?
                                        <div className='col-span-6 text-red-600'>
                                            <p>{error}</p>
                                        </div>
                                        :
                                        <></>
                                }

                                <div className="col-span-6">
                                    <label className="flex gap-4">
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span className="text-sm text-gray-700">
                                            Remember me
                                        </span>
                                    </label>
                                </div>


                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        type='submit'
                                    >
                                        Login
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Don't have an account?
                                        <Link to='/register' className="text-gray-700 underline pl-1">Register</Link>
                                    </p>
                                </div>
                            </form>
                            {/* google sign in here */}
                            <hr className='my-8' />
                            <div className='flex justify-center w-1/2 mx-auto'>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className='flex items-center gap-7 shrink-0 rounded-md border border-blue-600 px-8 lg:px-12 py-3 font-medium text-blue-600
                                     hover:bg-blue-50 focus:outline-none focus:ring active:text-blue-500 text-xl'>
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

export default Login;