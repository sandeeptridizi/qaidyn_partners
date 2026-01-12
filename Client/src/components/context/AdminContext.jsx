import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within AdminProvider');
    }
    return context;
};

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminData, setAdminData] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if admin is logged in on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('adminToken');
        const storedAdmin = localStorage.getItem('adminData');

        if (storedToken && storedAdmin) {
            setToken(storedToken);
            setAdminData(JSON.parse(storedAdmin));
            setIsAdmin(true);
        }
        setLoading(false);
    }, []);

    const login = (token, adminData) => {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminData', JSON.stringify(adminData));
        setToken(token);
        setAdminData(adminData);
        setIsAdmin(true);
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        setToken(null);
        setAdminData(null);
        setIsAdmin(false);
    };

    const value = {
        isAdmin,
        adminData,
        token,
        loading,
        login,
        logout
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};
