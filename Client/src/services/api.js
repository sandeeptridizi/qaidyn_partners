const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
};

// Auth APIs
export const authAPI = {
    login: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return response.json();
    },

    verify: async () => {
        const response = await fetch(`${API_BASE_URL}/admin/verify`, {
            headers: getAuthHeaders()
        });
        return response.json();
    }
};

// Content APIs
export const contentAPI = {
    // Get home page content (public)
    getHomeContent: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/content/home`);
            if (!response.ok) {
                console.error('getHomeContent failed:', response.status, response.statusText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error('getHomeContent error:', error);
            return { success: false, message: error.message, content: {} };
        }
    },

    // Update content (admin only)
    updateContent: async (key, type, value) => {
        try {
            const response = await fetch(`${API_BASE_URL}/content/update`, {
                method: 'PUT',
                headers: getAuthHeaders(),
                body: JSON.stringify({ key, type, value })
            });
            if (!response.ok) {
                console.error('updateContent failed:', response.status, response.statusText);
                const errorData = await response.json();
                return errorData;
            }
            return response.json();
        } catch (error) {
            console.error('updateContent error:', error);
            return { success: false, message: error.message };
        }
    },

    // Upload image (admin only)
    uploadImage: async (key, file) => {
        const formData = new FormData();
        formData.append('key', key);
        formData.append('image', file);

        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${API_BASE_URL}/content/upload-image`, {
            method: 'POST',
            headers: {
                ...(token && { 'Authorization': `Bearer ${token}` })
            },
            body: formData
        });
        return response.json();
    }
};
