import { API_URL, AuthHeaders } from './config';
import type { ApiResponse, CreatedWorkoutSession, WorkoutSession, WorkoutSetResponse, WorkoutTemplate } from '../types/workout/workout';
import type { Post } from "../types/posts"
export const getWorkoutTemplates = async (): Promise<WorkoutTemplate[]> => {
    const response = await fetch(`${API_URL}/workout-templates`, { headers: AuthHeaders() });
    const result: ApiResponse<WorkoutTemplate[]> = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || 'Failed to load workout templates');
    return result.data;
};

export const createWorkoutSession = async (workoutTemplateId: number): Promise<CreatedWorkoutSession> => {
    const response = await fetch(`${API_URL}/workout-sessions`, {
        method: 'POST',
        headers: AuthHeaders(),
        body: JSON.stringify({ workout_template_id: workoutTemplateId })
    });
    const result: ApiResponse<CreatedWorkoutSession> = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || 'Failed to start workout session');
    return result.data;
};

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
export const getWorkoutSession = async (id: string): Promise<WorkoutSession> => {
    const response =  await fetch(`${API_URL}/workout-sessions/${id}`, {
        headers:AuthHeaders()
    });
    
    const data: ApiResponse<WorkoutSession> = await response.json();
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
export const workoutSets = async (
    weight: number,
    exercise_id: number,
    rir: number,
    reps: number,
    session_id: number
): Promise<ApiResponse<WorkoutSetResponse>> => {
   const response = await fetch(`${API_URL}/workout-sets`, {
        headers: AuthHeaders(),
        method:'POST',
    
    body: JSON.stringify({session_id,weight,exercise_id,rir,reps})
    });
    const data: ApiResponse<WorkoutSetResponse> = await response.json();
   if(!response.ok || !data.success){
    throw new Error(data.message || 'Failed to load workout sets');
   }
   return data;

}
export const createPosts = async (
    title:string,
    content:string,
    category_id:number,
    image_url?:File,
):Promise<ApiResponse<Post>> => {
     const formData = new FormData();
    formData.append('title',title);
    formData.append('content',content);
    formData.append('category_id',String(category_id));
    if (image_url){
        formData.append('image_url',image_url);
    }
    const response = await fetch (`${API_URL}/posts`, {
        headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
        method: 'POST',   
        body:formData,
        
    });
   
    
  const data: ApiResponse<Post> = await response.json();
    if (!response.ok || !data.success){
            throw new Error(data.message || 'Failed to load Posts');
    }
    return data;
}
export const getPosts = async () => {
    const response = await fetch (`${API_URL}/posts`, {headers: AuthHeaders(),});
    const data = await response.json();
    if (!response.ok || !data.success){
            throw new Error(data.message || 'Failed to load Posts');
    }
    return data;
}
export const getUserPosts = async () => {
    const response = await fetch(`${API_URL}/posts/own-posts`,{
        headers:AuthHeaders(),
        method:'GET',
        });
        const data: ApiResponse<Post[]> = await response.json();
        if (!response.ok || !data.success){
            throw new Error(data.message || "Failed to load User Posts");
        }
        return data;
}