import { API_URL, AuthHeaders } from './config';

export const getWorkoutSessions = async () => {
    const response = await fetch(`${API_URL}/workout-sessions`, {
        headers: AuthHeaders()
    });

    const data = await response.json();
   if(!response.ok || !data.success){
    throw new Error(data.message || 'Failed to load workout sessions');
   }
   return data.data;

}
export const getExercises = async () => {
    const response = await fetch(`${API_URL}/exercises`, {
        headers: AuthHeaders()
    });
    const data = await response.json();
    if(!response.ok || !data.success){
        throw new Error(data.message || 'Failed to load exercises');
       }
       return data.data;
}
export const getWorkoutSessionById = async (id: string) => {
    const response = await fetch(`${API_URL}/workout-sessions/${id}`, {
        headers: AuthHeaders()
    });
    const data = await response.json();
    if(!response.ok || !data.success){
        throw new Error(data.message || 'Failed to load workout session');
       }
       return data.data;
}
export const loginUser = async (email:string,password:string) => {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if(!response.ok ||  !data.success){
        throw new Error(data.message || 'Login attempt failed');
    }
    return data.data;
}
export const registerUser = async (name:string,email:string,password:string,password_confirmation:string) => {
    const response = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, password_confirmation })
    });
    const data = await response.json();
    if(!response.ok ||  !data.success){
        throw new Error(data.message || 'Registration attempt failed');
    }
    return data.data;
}