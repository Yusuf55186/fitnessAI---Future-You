
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
    

}
