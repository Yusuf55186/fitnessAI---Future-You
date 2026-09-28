import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button/Button"
import { getExercises } from "../api/services";
import { getWorkoutSession } from "../api/services";
import { Card } from "../components/ui/Card/Card";
import { ExerciseCard } from "../Exercise/ExerciseCard";
import { useParams } from "react-router-dom";


type Exercise = {
    id: number,
    name:string,
    
    
}

type WorkoutSet = {
    set_number: number;
    weight:number;
    rir:number;
    reps:number;
}
type WorkoutExercise = {
    id:number;
    exercise_id:number;
    workout_session_id:number;
    workout_sets: WorkoutSet[];
    exercise:Exercise;
}
type workoutSession = {
    id:number;
    note: string | null;
    name: string;
    workout_exercises: WorkoutExercise[];
    

}
export const WorkoutSessionPage = () => {
    const [isAddExerciseOpen,setisAddExercise] = useState<boolean>(false); 
    const [Exercise,setExercise] = useState<Exercise[]>([]);
    const [session,setSession] = useState<workoutSession | null>(null);
    const [selectedExercises,setselectedExercises] = useState<Exercise[]>([]);
    const [loading,setloading] = useState<boolean>(true);
    const [error,setError] = useState<string | null> (null);
    const [sessionId,setSessionId] = useState<number | null> (null);
    const alreadySelected = (id: number) => selectedExercises.some((selectedExercise) => selectedExercise.id === id);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
            const data = await getExercises();
            setExercise(data);
            }
            catch (err:any) {
                
                setError(err.message || "Failed getting Exerciese")
            }
            finally {
                setloading(false)
            }
           
        }
        if (isAddExerciseOpen) {
            fetchData();
        }
    }, [isAddExerciseOpen]);
useEffect(() => {
    if(!id) return;
    const fetchActiveSession = async () => {
        try {
            setloading(true);
        const data = await getWorkoutSession(id);
        setSession(data);
        setSessionId(data.id);
        }
        catch (err:any) {
            setError(err.message || "Failed to fetch Active sessions");
        }
        finally {
            setloading(false);
        }

    }
    fetchActiveSession();
},[id])


    return (
        
        <div className="flex flex-col mx-auto w-page-max-width justify-center mt-fy-4">
            <section className="flex flex-col justify-center gap-fy-4">
                <h1 className="text-fy-xl text-fy-accent font-fy-bold">New Workout</h1>
                <p className="text-fy-text-secondary font-fy-semibold">Workout in progress</p>
            </section>
            <section>
                {isAddExerciseOpen ? (
                    <>
                    <Card>
                        <div className="flex justify-between">
                        <p className="text-fy-text uppercase text-fy-md font-fy-semibold">Exercise Selector</p>
                        <Button variant="ghost" onClick={() => setisAddExercise(false)}>
                            Cancel
                        </Button>
                        </div>
                        {loading ? (
                            <p>Loading Exercises</p>
                        ) : (
                            <>
                                <div className="max-h-[500px] overflow-y-auto ">
                                   {Exercise.map((exer) => (
                                    <div className="flex justify-between items-center  px-fy-4 py-fy-2 border-b border-fy-border" key={exer.id}>
                                        <p>{exer.name}</p>
                                        <Button
                                            onClick={() => {  
                                                if (alreadySelected(exer.id)){
                                                    return;
                                                }
                                                 setselectedExercises([...selectedExercises, exer])}
                                            }
                                            
                                            
                                            variant="primary"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    
                                ))}
                                </div>
                            </>
                                    
                        )}
                        
                        
                      </Card> 
                      </> 
                  
                    
                    
                ) : (
                    <p>No Exercises yet</p>
                )}

                {selectedExercises.map((selectedexer) => (
                    <ExerciseCard existingSets={[]} onSessionCreated={setSessionId} sessionId={sessionId}  key={selectedexer.id} name={selectedexer.name} id={selectedexer.id}
                    
                    />
                ))}
                

                <p>Selected: {selectedExercises.length}</p>
                <Button onClick={() => setisAddExercise(true)} variant="primary">
                    + Add exercise
                </Button>
                <p className="text-fy-danger">{error}</p>
            
            
            </section>
            {session?.workout_exercises.map((workoutExercise) => {
                return (
                    <ExerciseCard  key={workoutExercise.id} id={workoutExercise.exercise_id} onSessionCreated={setSessionId} sessionId={sessionId} existingSets={workoutExercise.workout_sets} name={workoutExercise.exercise.name}></ExerciseCard>
                )
            })}
           
            
        </div>
        
        
   )
   }