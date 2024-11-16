import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import API from '../api';
import { FaUserAlt,FaEnvelope, FaLock } from 'react-icons/fa'; 


const Login = () => {
   
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/table');
        } catch (error) {
            alert(error.response.data.message || 'Login failed');
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <div className="icon">
                    <FaUserAlt />
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <span className="input-icon"><FaEnvelope/></span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            className="input-box"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-icon"><FaLock/></span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            className="input-box"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
                <p>
                    Not registered? <Link to="/register" className="link">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
