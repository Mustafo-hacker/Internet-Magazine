import axios from 'axios'; 
import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';  

const Login = () => {
    const [error, setError] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    async function logIn() {
        setError('');
        
        if (!userName || !password) {
            setError('Please fill all fields.');
            return;
        }

        let user = {
            userName: userName,
            password: password
        };
        
        try {
            let { data } = await axios.post("https://store-api.softclub.tj/Account/login", user);
            navigate("/home");
            localStorage.setItem("access_token",data.data)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Incorrect username or password');
            } else {
                setError('Incorrect username or password.');
            }
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] p-6 rounded-lg ">
                <h2 className="text-2xl font-[500] tracking-[2px] text-[27px] mb-1">Log in to Exclusive</h2>
                <p className="text-sm text-gray-900 mb-6 font-[400]">Enter your details below</p>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <input
                    type="text"
                    placeholder="Enter a name"
                    value={userName}
                    onChange={(el) => setUserName(el.target.value)}
                    className="w-full mb-3 p-3 border border-gray-300 rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Enter a password"
                    value={password}
                    onChange={(el) => setPassword(el.target.value)}
                    className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none"
                />
                <div className="text-center mb-6">
                    <Link to="/forgot" className="text-sm text-red-600 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <button onClick={logIn} className="w-full bg-red-500 cursor-pointer text-white py-3 rounded-md mb-4 hover:bg-red-600">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Login;
