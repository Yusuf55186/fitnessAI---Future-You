import { WorkoutHistoryCard } from "./WorkoutHistoryCard"
import { useState,useEffect } from "react";
import  { type WorkoutSession } from "../types/workout/workout";
import { getWorkoutSessions } from "../api/services";
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
        <p>{loading}</p>
        <p className="text-fy-danger">{error}</p>
       <>
        {sessionsHistory.map((sessionHistory) => {
            return (
                <WorkoutHistoryCard key={sessionHistory.id} id={sessionHistory.id} name={sessionHistory.name} note={sessionHistory.note} date={sessionHistory.date} >
               
                </WorkoutHistoryCard>
            )

        })}
       </>
       </>
    )
}
