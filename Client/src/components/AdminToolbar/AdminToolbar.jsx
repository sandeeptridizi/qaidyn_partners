import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminToolbar.css';

const AdminToolbar = () => {
    const { isAdmin, adminData, logout } = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        // Don't modify body class if we are on the login page (because toolbar is hidden)
        if (location.pathname === '/admin-login') {
            document.body.classList.remove('admin-mode-active');
            return;
        }

        if (isAdmin) {
            document.body.classList.add('admin-mode-active');
        } else {
            document.body.classList.remove('admin-mode-active');
        }
        return () => document.body.classList.remove('admin-mode-active');
    }, [isAdmin, location.pathname]);

    if (!isAdmin) return null;
    if (location.pathname === '/admin-login') return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="admin-toolbar">
            <div className="toolbar-content">
                <div className="toolbar-left">
                    <span className="admin-badge">🔧 Admin Mode</span>
                    <span className="admin-name">Welcome, {adminData?.name || 'Admin'}</span>
                </div>
                <div className="toolbar-right">
                    <span className="toolbar-info">Hover over content to edit</span>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminToolbar;
