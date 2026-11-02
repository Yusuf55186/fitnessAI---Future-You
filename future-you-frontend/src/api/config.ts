export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
export const IMAGE_API_URL = API_URL.replace(/\/api\/?$/, "");
export const AuthHeaders = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    };
};