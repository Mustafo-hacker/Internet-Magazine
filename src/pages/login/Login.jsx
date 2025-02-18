import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [nameOrPhone, setNameOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!nameOrPhone || !password) {
            setError('Please fill all fields');
            return;
        }

        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(
            (user) => (user.name === nameOrPhone || user.phone === nameOrPhone) && user.password === password
        );

        if (user) {
            navigate('/home');
        } else {
            setError('Invalid name, phone or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] p-6 rounded-lg ">
                <h2 className="text-2xl font-[500] tracking-[2px] text-[27px] mb-1">Log in to Exclusive</h2>
                <p className="text-sm text-gray-900 mb-6 font-[400]">Enter your details below</p>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Name or Phone"
                        value={nameOrPhone}
                        onChange={(e) => setNameOrPhone(e.target.value)}
                        className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none"
                    />
                    <div className="text-center mb-6">
                        <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" className="w-full bg-red-500 cursor-pointer text-white py-3 rounded-md mb-4 hover:bg-red-600">
                        Log In
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;
