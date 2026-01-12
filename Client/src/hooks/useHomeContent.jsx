import { useState, useEffect, createContext, useContext } from 'react';
import { contentAPI } from '../services/api';

// Create context for home content
const HomeContentContext = createContext();

export const useHomeContent = () => {
    const context = useContext(HomeContentContext);
    if (!context) {
        // If no context, return a simple getter that returns default
        return {
            getContent: (key, fallback = '') => fallback,
            loading: false,
            error: null,
            refetch: async () => { } // No-op function
        };
    }
    return context;
};

// Provider component
export const HomeContentProvider = ({ children }) => {
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            setLoading(true);
            const result = await contentAPI.getHomeContent();

            if (result.success) {
                setContent(result.content || {});
            } else {
                setError(result.message);
            }
        } catch (err) {
            console.error('Error fetching content:', err);
            setError('Failed to load content');
            // Don't throw error, just use defaults
        } finally {
            setLoading(false);
        }
    };

    const getContent = (key, fallback = '') => {
        return content[key]?.value || fallback;
    };

    const value = {
        content,
        loading,
        error,
        getContent,
        refetch: fetchContent
    };

    return (
        <HomeContentContext.Provider value={value}>
            {children}
        </HomeContentContext.Provider>
    );
};
