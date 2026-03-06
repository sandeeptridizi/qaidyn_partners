import { useState, useEffect } from 'react';
import { careerAPI } from '../services/api';

export function useFirebaseCareers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await careerAPI.getAll();
        if (res.success && res.careers) {
          setCareers(res.careers);
        } else {
          setCareers([]);
        }
      } catch (err) {
        console.error('Error fetching careers:', err);
        setError(err.message);
        setCareers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  return { careers, loading, error };
}
