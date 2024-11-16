import React from 'react';
import { useNavigate } from 'react-router-dom';


const TablePage = () => {
    const navigate = useNavigate();
     const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const dummyData = [
        { id: 1, name: 'John Doe', date: '2024-11-01', role: 'Admin', status: 'Active', action: 'Edit' },
        { id: 2, name: 'Jane Smith', date: '2024-10-15', role: 'User', status: 'Inactive', action: 'Edit' },
        { id: 3, name: 'Alice Johnson', date: '2024-09-20', role: 'Moderator', status: 'Active', action: 'Edit' },
        { id: 4, name: 'Bob Brown', date: '2024-11-10', role: 'User', status: 'Active', action: 'Edit' },
        { id: 5, name: 'Emily White', date: '2024-08-25', role: 'Admin', status: 'Inactive', action: 'Edit' },
    ];

    return (
        <div className="table-page">
            <div className="header">
               <h2>Welcome, {user?.name}</h2>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.date}</td>
                            <td>{row.role}</td>
                            <td className={row.status === 'Active' ? 'active' : 'inactive'}>
                                {row.status}
                            </td>
                            <td>
                                <button className="action-button">{row.action}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
