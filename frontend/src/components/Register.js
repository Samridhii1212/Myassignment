import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope,FaCalendarAlt, FaLock, FaUserAlt } from 'react-icons/fa';
import API from '../api';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/register', formData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/table');
        } catch (error) {
            alert(error.response.data.message || 'Registration failed');
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
                        <span className="input-icon"><FaUserAlt /></span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            className="input-box"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-icon"><FaCalendarAlt/></span>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            className="input-box"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-icon"><FaEnvelope/></span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            className="input-box"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-icon"><FaLock/></span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            className="input-box"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Register</button>
                </form>
                <p>
                    Already a user? <Link to="/login" className="link">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
