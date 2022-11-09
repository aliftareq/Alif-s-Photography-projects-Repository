import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../Assests/Images/alif-studio.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, LogOut } = useContext(AuthContext)
    //console.log(user);

    //navigation 
    const navigate = useNavigate()

    //handler
    //1
    const handleSignOut = () => {
        LogOut()
        navigate('/login')
    }
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            aria-label="Alif's Photography"
                            title="Alif's Photography"
                            className="inline-flex items-center mr-8"
                        >
                            <img className='w-16 lg:w-28 lg:h-16' src={img} alt="" />
                            <span className="text-lg font-bold tracking-wide text-gray-100 uppercase">
                                Alif's Photography
                            </span>
                        </Link>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            {
                                user && user?.uid
                                    ?
                                    <>
                                        <li>
                                            <Link
                                                to="/my-reviews"
                                                aria-label="My reviews"
                                                title="My reviews"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                My reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/add-service"
                                                aria-label="Add service"
                                                title="Add service"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                Add service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about-me"
                                                aria-label="About-me"
                                                title="About-me"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                About-me
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label="Blog"
                                                title="Blog"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link
                                                to="/about-me"
                                                aria-label="About-me"
                                                title="About-me"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                About-me
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label="Blog"
                                                title="Blog"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {
                            user && user?.uid
                                ?
                                <>
                                    <li>
                                        <Link
                                            to="/"
                                            aria-label="Sign up"
                                            title={user?.displayName ? user?.displayName : 'Annonymous'}
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="flex flex-wrap gap-x-2 gap-y-2">
                                                    <div className="relative flex-shrink-0">
                                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                        {
                                                            user?.photoURL
                                                                ? <img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                                : <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li onClick={handleSignOut}>
                                        <Link
                                            to=""
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Logout"
                                            title="Logout"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            aria-label="Login"
                                            title="Login"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Register"
                                            title="Register"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                        }

                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Alif's Photography"
                                                title="Alif's Photography"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-12 lg:w-28 lg:h-16' src={img} alt="" />
                                                <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">
                                                    Alif's Photography
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className=''>
                                        <ul className="space-y-4">
                                            {
                                                user && user?.uid
                                                    ?
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/my-reviews"
                                                                aria-label="My reviews"
                                                                title="My reviews"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                My reviews
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/add-service"
                                                                aria-label="Add service"
                                                                title="Add service"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                Add service
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/about-me"
                                                                aria-label="About-me"
                                                                title="About-me"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                About-me
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/blog"
                                                                aria-label="Blog"
                                                                title="Blog"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                Blog
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/"
                                                                aria-label="Sign up"
                                                                title={user?.displayName ? user?.displayName : 'Annonymous'}
                                                            >
                                                                <div className="flex flex-col items-center justify-center">
                                                                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                                                                        <div className="relative flex-shrink-0">
                                                                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                                            {
                                                                                user?.photoURL
                                                                                    ? <img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                                                    : <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li onClick={handleSignOut}>
                                                            <Link
                                                                to=""
                                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Logout"
                                                                title="Logout"
                                                            >
                                                                Logout
                                                            </Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/about-me"
                                                                aria-label="About-me"
                                                                title="About-me"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                About-me
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/blog"
                                                                aria-label="Blog"
                                                                title="Blog"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                Blog
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/login"
                                                                aria-label="Login"
                                                                title="Login"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                            >
                                                                Login
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/register"
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Register"
                                                                title="Register"
                                                            >
                                                                Register
                                                            </Link>
                                                        </li>
                                                    </>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;