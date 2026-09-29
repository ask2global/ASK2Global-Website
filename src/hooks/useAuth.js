import { useState, useCallback } from 'react';

const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function useAuth() {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('authUser');
        return stored ? JSON.parse(stored) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const saveSession = (token, user) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('authUser', JSON.stringify(user));
        setUser(user);
    };

    const call = useCallback(async(path, body) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_URL}${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong');
            saveSession(data.token, data.user);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const registerVendor = (form) => call('/api/auth/register/vendor', form);
    const registerCustomer = (form) => call('/api/auth/register/customer', form);
    const loginEmployee = (form) => call('/api/auth/login/employee', form);

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        setUser(null);
    };

    return { user, loading, error, registerVendor, registerCustomer, loginEmployee, logout };
}