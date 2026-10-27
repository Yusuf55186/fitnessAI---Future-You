
export type Exercise = {
    id: number,
    name:string,
    
    
}
export type WorkoutSet = {
    set_number: number;
    weight:number;
    rir:number;
    reps:number;
}
export type WorkoutExercise = {
    id:number;
    exercise_id:number;
    workout_session_id:number;
    workout_sets: WorkoutSet[];
    exercise:Exercise;
}
export type WorkoutSession = {
    id:number;
    note: string | null;
    name: string;
    workout_exercises: WorkoutExercise[];
    date: string | null;
    workout_template_id?: number | null;
};

export type WorkoutTemplate = { id: number; name: string };
export type ApiResponse<T> = { success: boolean; data: T; message: string };
export type WorkoutSetResponse = WorkoutSet & { id: number; workout_exercise_id: number };
export type CreatedWorkoutSession = {
    id: number;
    name: string;
    note: string | null;
    date: string;
    workout_template_id: number;
};
