import React from 'react';
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (



        <nav className=" pl-12 ">
            <div className=" flex flex-wrap items-center justify-between mx-auto pt-5">
                <a href="#" className=" ">
                    <div className='flex justify-center'>
                        <img
                            src="public/assets/logo.png"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                    </div>
                    <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">

                        <span className="text-black">PAY</span>
                        <span className="text-green-500">SANO</span>
                    </div>
                </a>
                <button
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden bg-[#8BC63E] md:block " id="navbar-multi-level ">
                    <ul className="flex items-center justify-between gap-4 py-4 pl-2 pr-20"> 
                        <li>
                            <a href="#" className=" text-center font-bold text-[20]" aria-current="page"> 
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" text-center  font-bold text-[20]" aria-current="page"> 
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" text-center font-bold text-[20]" aria-current="page"> 
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="  text-center font-bold text-[20]" aria-current="page"> 
                                CONTACT US
                            </a>
                        </li>
                        <li className="text-center "> 
                            <span className="text-center flex"><img className='h-7 text-center' src="public/assets/searchicon.png" alt="" /></span> 
                        </li>
                    </ul>
                </div>

            </div>
        </nav>



    );
};

export default Navbar;
