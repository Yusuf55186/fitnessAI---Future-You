import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button/Button"
import { getExercises } from "../api/services";
import { Card } from "../components/ui/Card/Card";
import { ExerciseCard } from "../Exercise/ExerciseCard";
type Exercise = {
    id: number,
    name:string,
    
}
export const WorkoutSessionPage = () => {
    const [isAddExerciseOpen,setisAddExercise] = useState<boolean>(false); 
    const [Exercise,setExercise] = useState<Exercise[]>([]);
    const [selectedExercises,setselectedExercises] = useState<Exercise[]>([]);
    const [loading,setloading] = useState<boolean>(true);
    const [error,setError] = useState<string | null> (null);
    
    
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
                                            onClick={() => setselectedExercises([...selectedExercises, exer])}
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
                    <ExerciseCard key={selectedexer.id} name={selectedexer.name} id={selectedexer.id}
                    
                    />
                ))}
                

                <p>Selected: {selectedExercises.length}</p>
                <Button onClick={() => setisAddExercise(true)} variant="primary">
                    + Add exercise
                </Button>
                <p className="text-fy-danger">{error}</p>
            
            
            </section>
                
           
            
        </div>
        
        
   )
   }