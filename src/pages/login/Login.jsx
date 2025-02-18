import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] p-6 rounded-lg ">
                <h2 className="text-2xl font-[500] tracking-[2px] text-[27px] mb-1">Log in to Exclusive</h2>
                <p className="text-sm text-gray-900 mb-6 font-[400]">Enter your details below</p>
                <input
                    type="email"
                    placeholder="Email or phone number"
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-md outline-none pr-10"
                    />
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                            />
                        </svg>
                    </span>
                </div>
                <p className="text-center text-sm text-red-600 mb-4 cursor-pointer hover:underline">Forget Password?</p>
                <Link to="/home">
                    <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600">
                        Log In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
