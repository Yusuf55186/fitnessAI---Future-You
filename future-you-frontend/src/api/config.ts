export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
export const IMAGE_API_URL = API_URL.replace(/\/api\/?$/, "");
export const AuthHeaders = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    };
};
export async function authFetch(url: string, options?: RequestInit) {
  const headers = new Headers(options?.headers);
headers.set('Accept', 'application/json');

const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    window.dispatchEvent(new Event('future-you:session-expired'));
  }

  return response;
}