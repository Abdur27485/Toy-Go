import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
    }
    return (
        <div className='lg:w-9/12 mx-auto shadow-2xl mt-8'>
            <section class="bg-white">
                <div class="lg:grid lg:grid-cols-12">
                    <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Night"
                            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div class="hidden lg:relative lg:block lg:p-12">
                            <a class="block text-white" href="/">
                                    {/* logo here */}
                            </a>

                            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome to ToyGo
                            </h2>

                            <p class="mt-4 leading-relaxed text-white/90">
                            We have a wide variety of toy cars for kids of all ages, from classic cars to modern sports cars. Whether your child is a car enthusiast or just loves to play, we have the perfect toy car for them.
                            </p>
                        </div>
                    </section>

                    <main
                        aria-label="Main"
                        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <div class="relative -mt-16 block lg:hidden">
                                <a
                                    class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                    href="/"
                                >
                                        {/* logo here */}
                                </a>

                                <h1
                                    class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Welcome to ToyGo
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                We have a wide variety of toy cars for kids of all ages, from classic cars to modern sports cars. Whether your child is a car enthusiast or just loves to play, we have the perfect toy car for them.
                                </p>
                                <h1 className='text-2xl font-bold text-center mt-5'>Login</h1>
                            </div>

                            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="FirstName"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="LastName"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="Email" class="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="PasswordConfirmation"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="MarketingAccept" class="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span class="text-sm text-gray-700">
                                            I want to receive emails about new products and blogs.
                                        </span>
                                    </label>
                                </div>

                                <div class="col-span-6">
                                    <p class="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <a href="#" class="text-gray-700 underline px-1">
                                            terms and conditions
                                        </a>
                                        and
                                        <a href="#" class="text-gray-700 underline pl-1">privacy policy</a>.
                                    </p>
                                </div>

                                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>

                                    <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Doen't have an account yet?
                                        <Link to='/register' class="text-gray-700 underline pl-1">Register</Link>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
};

export default Login;