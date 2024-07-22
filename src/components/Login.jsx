import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } else {
            setError('Wrong username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-600">
            <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md mx-4">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome Back!</h2>
                <p className="mb-4 text-center text-gray-600">Please enter your credentials to log in.</p>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-slate-500 text-white py-2 rounded hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-colors duration-200"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

Login.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
