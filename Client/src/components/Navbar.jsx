import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="navbar bg-white border-gray-200 dark:bg-pink-700 overflow-y-hidden">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/theMumStudio.png" className="h-10 w-10" alt="theMumStudio Logo" />
                        <span className="span font-narrow self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Mum Studio</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link to="/cart" className="text-gray-700 dark:text-white hover:text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </Link>
                                {/* <Link to="/account" className="text-gray-700 dark:text-white hover:text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    Account
                                </Link> */}
                        <Link to="/login" className="text-md font-serif dark:text-white hover:text-gray-200">Login</Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-blue-50 dark:bg-pink-200">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium font-serif mt-0 space-x-8 rtl:space-x-reverse text-md">
                            <li>
                                <Link to="/" className="text-gray-700 hover:text-gray-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-700 hover:text-gray-500">About</Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-gray-700 hover:text-gray-500 flex items-center"
                                >
                                    Products
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700">
                                        <li><Link to="/product/tortoiseDiya" className="block px-4 py-2 hover:bg-gray-100">Tortoise Diya</Link></li>
                                        <li><Link to="/product/ganpatiDiya" className="block px-4 py-2 hover:bg-gray-100">Ganpati Diya</Link></li>
                                        <li><Link to="/product/elephantDiya" className="block px-4 py-2 hover:bg-gray-100">Elephant Diya</Link></li>
                                        <li><Link to="/product/peacockDiya" className="block px-4 py-2 hover:bg-gray-100">Peacock Diya</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-700 hover:text-gray-500"> Contact </Link>
                            </li>
                            {/* <div className="flex items-end space-x-6">
                                <Link to="/cart" className="text-gray-700 dark:text-white hover:text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </Link>
                                <Link to="/account" className="text-gray-700 dark:text-white hover:text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    Account
                                </Link>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;




