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
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-3 lg:px-8">
                <div className="flex items-center gap-4">
                    {/* LOGO */}
                    <Link to='/' className="flex">
                        <img src="https://i.ibb.co/cQjF00T/logo.png" className='w-20 lg:w-28' alt="" />
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">
                    {/* Navigation Links */}
                    <nav aria-label="Site Nav" className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                        <Link to='/' className={linkStyle}>
                            Home
                        </Link>
                        <Link to='/allToy' className={linkStyle}>
                            All Toys
                        </Link>
                        {
                            user &&
                            <>
                                <Link to='/myToy' className={linkStyle}>
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
                        <div className="hidden lg:flex items-center lg:px-4 lg:border-x lg:border-gray-100">
                            <span className="lg:border-e lg:border-e-gray-100 flex items-center">
                                {
                                    user ?
                                        <>
                                            <div className='tooltip tooltip-left rounded-full' data-tip={user.displayName}>
                                                <img src={user?.photoURL} className=' w-14 rounded-full' />
                                            </div>
                                            <button className='btn ml-4' onClick={handleLogOut}>Log Out</button>
                                        </>
                                        :
                                        <Link to='/login' className="grid lg:h-16 lg:w-24 place-content-center border-b-4 border-transparent hover:border-red-700">
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
                {/* mobile dropdown navigation */}
                <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='border-b'>
                                <div className="flex items-center lg:px-4 lg:border-x lg:border-gray-100">
                                    <span className="lg:border-e lg:border-e-gray-100 flex items-center">
                                        {
                                            user ?
                                                <div className='flex justify-between items-center'>
                                                    <div className='tooltip tooltip-left rounded-full' data-tip={user.displayName}>
                                                        <img src={user?.photoURL} className=' w-14 rounded-full' />
                                                    </div>
                                                    <button className='bg-primary text-white rounded-md px-3 py-2 ml-4' onClick={handleLogOut}>Log Out</button>
                                                </div>
                                                :
                                                <Link to='/login'>
                                                    <span className='flex items-center gap-1'>
                                                        Login
                                                        <FiLogIn />
                                                    </span>
                                                </Link>
                                        }
                                    </span>
                                </div>
                            </li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToy'>All Toys</Link></li>
                            <li><Link to='/myToy'>My Toys</Link></li>
                            <li><Link to='/addToy'>Add Toy</Link></li>
                            <li><Link to=''>Blogs</Link></li>
                        </ul>
                    </div>
            </div>
        </header>
    );
};

export default Navbar;