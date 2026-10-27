import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button/Button"
import { createWorkoutSession, getExercises, getWorkoutSession, getWorkoutTemplates } from "../api/services";
import { Card } from "../components/ui/Card/Card";
import { ExerciseCard } from "../Exercise/ExerciseCard";
import { useNavigate, useParams } from "react-router-dom";
import type { WorkoutSession, WorkoutTemplate } from "../types/workout/workout";


type Exercise = { id: number; name: string };
export const WorkoutSessionPage = () => {
    const [isAddExerciseOpen,setisAddExercise] = useState<boolean>(false); 
    const [Exercise,setExercise] = useState<Exercise[]>([]);
    const [session,setSession] = useState<WorkoutSession | null>(null);
    const [selectedExercises,setselectedExercises] = useState<Exercise[]>([]);
    const [loading,setloading] = useState<boolean>(true);
    const [error,setError] = useState<string | null> (null);
    const [sessionId,setSessionId] = useState<number | null> (null);
    const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
    const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(null);
    const [templatesLoading, setTemplatesLoading] = useState(true);
    const [startingSession, setStartingSession] = useState(false);
    const alreadySelected = (id: number) => selectedExercises.some((selectedExercise) => selectedExercise.id === id);
    const { id } = useParams();
    const navigate = useNavigate();
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
    if (!id) {
        const fetchTemplates = async () => {
            try {
                setTemplatesLoading(true);
                setError(null);
                setTemplates(await getWorkoutTemplates());
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Failed to load workout templates");
            } finally {
                setTemplatesLoading(false);
            }
        };
        void fetchTemplates();
        return;
    }
    const fetchActiveSession = async () => {
        try {
            setloading(true);
            setError(null);
        const data = await getWorkoutSession(id);
        setSession(data);
        setSessionId(data.id);
        }
        catch (err:unknown) {
            setError(err instanceof Error ? err.message : "Failed to fetch active session");
        }
        finally {
            setloading(false);
        }

    }
    fetchActiveSession();
},[id])

    const handleStartSession = async () => {
        if (selectedTemplateId === null) return;
        try {
            setStartingSession(true);
            setError(null);
            const createdSession = await createWorkoutSession(selectedTemplateId);
            navigate(`/workout-sessions/${createdSession.id}`);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Failed to start workout session");
        } finally {
            setStartingSession(false);
        }
    };

    if (!id) {
        return (
            <main className="mx-auto flex w-page-max-width flex-col gap-fy-4 mt-fy-4">
                <section>
                    <h1 className="text-fy-xl text-fy-accent font-fy-bold">Start a workout</h1>
                    <p className="text-fy-text-secondary">Choose a workout template to create a session.</p>
                </section>
                {templatesLoading ? <p>Loading workout templates…</p> : templates.length === 0 ? (
                    <Card><p>No workout templates available yet.</p></Card>
                ) : (
                    <div className="flex flex-col gap-fy-3" role="radiogroup" aria-label="Workout templates">
                        {templates.map((template) => (
                            <button
                                key={template.id}
                                type="button"
                                role="radio"
                                aria-checked={selectedTemplateId === template.id}
                                onClick={() => setSelectedTemplateId(template.id)}
                                className={`w-full rounded-lg border p-fy-4 text-left ${selectedTemplateId === template.id ? "border-fy-accent" : "border-fy-border"}`}
                            >
                                <span className="font-fy-semibold">{template.name}</span>
                            </button>
                        ))}
                    </div>
                )}
                {selectedTemplateId !== null && (
                    <Button variant="primary" onClick={handleStartSession} disabled={startingSession}>
                        {startingSession ? "Starting…" : "Start workout"}
                    </Button>
                )}
                {error && <p className="text-fy-danger" role="alert">{error}</p>}
            </main>
        );
    }


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
                    <ExerciseCard onSessionCreated={setSessionId} existingSets={[]} sessionId={sessionId}  key={selectedexer.id} name={selectedexer.name} id={selectedexer.id}
                    
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
                    <ExerciseCard onSessionCreated={setSessionId}  key={workoutExercise.id} id={workoutExercise.exercise_id} sessionId={sessionId} existingSets={workoutExercise.workout_sets} name={workoutExercise.exercise.name}></ExerciseCard>
                )
            })}
           
            
        </div>
        
        
   )
   }
