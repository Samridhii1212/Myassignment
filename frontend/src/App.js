import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TablePage from './components/TablePage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
    return (
        
        <Router>
            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/table"
                    element={
                        <ProtectedRoute>
                        <TablePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

