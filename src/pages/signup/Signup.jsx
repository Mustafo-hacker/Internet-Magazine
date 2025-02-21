import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function registration() {
        setError(''); 

        if (!userName || !email || !phoneNumber || !password) {
            setError('Please fill all fields.');
            return;
        }

        const user = {
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            confirmPassword: password
        };
        
        try {
            let { data } = await axios.post("https://store-api.softclub.tj/Account/register", user);
            window.location.href = "/login";
        } catch (error) {
            setError('This user is already exists.');
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] p-6 rounded-lg ">
                <h2 className="text-2xl font-[500] tracking-[2px] text-[27px] mb-1">Create an account</h2>
                <p className="text-sm text-gray-900 mb-6 font-[400]">Enter your details below</p>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    value={userName}
                    onChange={(el) => setUserName(el.target.value)}
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(el) => setEmail(el.target.value)}
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(el) => setPhoneNumber(el.target.value)}
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(el) => setPassword(el.target.value)}
                    className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none"
                />
                <button onClick={registration} className="w-full bg-red-500 cursor-pointer text-white py-3 rounded-md mb-4 hover:bg-red-600">
                    Create Account
                </button>
                <button className="w-full flex items-center justify-center border cursor-pointer border-gray-300 py-3 rounded-md mb-4 hover:bg-gray-100">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Sign up with Google
                </button>
                <p className="text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-gray-700 font-medium pl-1 hover:underline">log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
