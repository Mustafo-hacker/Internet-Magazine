import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] p-6 rounded-lg ">
                <h2 className="text-2xl font-[500] tracking-[2px] text-[27px] mb-1">Create an account</h2>
                <p className="text-sm text-gray-900 mb-6 font-[400]">Enter your details below</p>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="email"
                    placeholder="Email or phone number"
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none"
                />
                <Link to="/login">
                    <button className="w-full bg-red-500 cursor-pointer text-white py-3 rounded-md mb-4 hover:bg-red-600">
                        Create Account
                    </button>
                </Link>
                <button className="w-full flex items-center justify-center border cursor-pointer border-gray-300 py-3 rounded-md mb-4 hover:bg-gray-100">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Sign up with Google
                </button>
                <p className="text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-gray-700 font-medium pl-2 hover:underline">log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
