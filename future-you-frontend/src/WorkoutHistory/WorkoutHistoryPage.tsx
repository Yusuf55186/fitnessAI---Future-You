import { WorkoutHistoryCard } from "./WorkoutHistoryCard"
import { useState,useEffect } from "react";
import  { type WorkoutSession } from "../types/workout/workout";
import { getWorkoutSessions } from "../api/services";
import { Button } from "../components/ui/Button/Button";

export const WorkoutHistoryPage = () => {
    
        const [sessionsHistory,setSessionsHistory] = useState<WorkoutSession[]>([]);
        const [loading,setloading] = useState<boolean>(true);
        const [error,setError] = useState<string | null> (null);
    
    useEffect(() => {
        
        const fetchActiveSession = async () => {
            try {
                setloading(true);
            const data = await getWorkoutSessions();
            setSessionsHistory(data);
        
            }
            catch (err:any) {
                setError(err.message || "Failed to fetch Active sessions");
            }
            finally {
                setloading(false);
            }
    
        }
        fetchActiveSession();
    },[])
    return (
        <>
    {error && (
        <p className="text-fy-danger">
            {error}
        </p>
    )}

    {loading && (
        <p className="text-fy-muted text-fy-lg text-center ">
            Loading workouts...
        </p>
    )}

    {!loading && !error && (
        <>
            {sessionsHistory.map((sessionHistory) => {
            return (
                <WorkoutHistoryCard key={sessionHistory.id} id={sessionHistory.id} name={sessionHistory.name} note={sessionHistory.note} date={sessionHistory.date} >
                    <Button variant="primary">View Workout</Button>
                </WorkoutHistoryCard>
                
            )

        })}
        </>
    )}
</>
        
    )
}
