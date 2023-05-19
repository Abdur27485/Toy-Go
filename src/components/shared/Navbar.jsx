import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import { AuthContext } from '../../providers/AuthProvider';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, auth } = useContext(AuthContext);
    const linkStyle = 'block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700';

    const handleLogOut = () => {
        signOut(auth).then(() => {
            Swal.fire(
                'Logged Out',
                'User Logged Out successfully',
                'success'
            )
        })
    }

    return (
        <header aria-label="Site Header" className="border-b border-gray-100">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">

                    <button type="button" className="p-2 lg:hidden">
                        {/* hamburger icon here */}
                    </button>

                    {/* LOGO */}
                    <a href="#" className="flex">
                        <h1 className='text-2xl font-mono'>ToyGo</h1>
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">
                    {/* Navigation Links */}
                    <nav aria-label="Site Nav" className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                        <Link to='/' className={linkStyle}>
                            Home
                        </Link>
                        <Link to='' className={linkStyle}>
                            All Toys
                        </Link>
                        {
                            user &&
                            <>
                                <Link to='' className={linkStyle}>
                                    My Toys
                                </Link>
                                <Link to='/addToy' className={linkStyle}>
                                    Add A Toy
                                </Link>
                            </>
                        }
                        <Link to='' className={linkStyle}>
                            Blogs
                        </Link>
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center px-4 border-x border-gray-100">
                            <span className="border-e border-e-gray-100 flex items-center">
                                {
                                    user ?
                                        <>
                                            <div className='tooltip tooltip-left rounded-full' data-tip={user.displayName}>
                                                <img src={user?.photoURL} className=' w-14 rounded-full' />
                                            </div>
                                            <button className='btn ml-4' onClick={handleLogOut}>Log Out</button>
                                        </>
                                        :
                                        <Link to='/login' className="grid h-16 w-24 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <span className='flex items-center gap-1'>
                                                Login
                                                <FiLogIn />
                                            </span>
                                        </Link>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;