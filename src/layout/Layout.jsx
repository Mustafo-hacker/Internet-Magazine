import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import logo from '../assets/logo.svg';

const Layout = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div>
            <nav>
                <header className='flex mt-[10px] pl-[130px]'>
                    <img className='cursor-not-allowed max-[638px]:ml-[-120px]' src={logo} alt="" />
                    <div className='pt-[10px]'>
                        <Link className='pl-[140px] max-[638px]:hidden' to="/home">Home</Link>
                        <Link className='pl-[40px] max-[638px]:hidden' to="/about">About</Link>
                        <Link className='pl-[40px] max-[638px]:hidden' to="/contact">Contact</Link>
                        <Link className='pl-[40px] max-[638px]:hidden' to="/">Sign Up</Link>
                        <input className='bg-[#80808021] ml-[160px] rounded-[5px] w-[200px] h-[35px] pl-[10px] placeholder:text-[13px]  max-[638px]:hidden' placeholder='What are you looking for?' type="text" />
                        <Link to="/wishlist">
                            <button className='pl-[40px] max-[638px]:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-6px] cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button className='pl-[30px] max-[638px]:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-6px] cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </Link>
                        <Link to="/profile">
                            <button className='pl-[30px] max-[638px]:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-[-6px] cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <button
                        className="block max-[638px]:block hidden ml-43 mt-2"
                        onClick={toggleModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18" />
                        </svg>
                    </button>
                </header>
                <p className='bg-[#8080807b] w-[100%] h-[1px] mt-[20px]'></p>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>

                {isModalOpen ? (
                    <div
                        className="fixed inset-0 bg-[#80808052] bg-opacity-60 z-50 flex justify-start items-start"
                        onClick={toggleModal}
                    >
                        <div className="bg-white w-[280px] h-full rounded-r-lg p-6 relative shadow-lg">
                            <button
                                className="absolute top-4 right-4 text-2xl text-gray-500"
                                onClick={toggleModal}
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Меню</h2>
                            <ul className="space-y-6">
                                <li><Link to="/home" onClick={toggleModal} className="block text-lg text-black-700 hover:text-blue-600 transition duration-300">Home</Link></li>
                                <li><Link to="/about" onClick={toggleModal} className="block text-lg text-black-700 hover:text-blue-600 transition duration-300">About</Link></li>
                                <li><Link to="/contact" onClick={toggleModal} className="block text-lg text-black-700 hover:text-blue-600 transition duration-300">Contact</Link></li>
                                <li><Link to="/" onClick={toggleModal} className="block text-lg text-black-700 hover:text-blue-600 transition duration-300">Sign Up</Link></li>
                                <div>
                                    <Link to="/wishlist">
                                        <button className='max-[638px]:ml-[-40px] pl-[40px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-6px] cursor-pointer">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className='pl-[30px] max-[638px]:ml-[5px] max-[638px]:mt-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-6px] cursor-pointer">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <Link to="/profile">
                                        <button className='pl-[30px] max-[638px]:ml-[5px] max-[638px]:mt-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-[-6px] cursor-pointer">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                ) : null}
            </nav>
        </div>
    );
};

export default Layout;
