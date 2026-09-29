import { WorkoutHistoryCard } from "./WorkoutHistoryCard"
import { useState,useEffect } from "react";
import  { type WorkoutSession } from "../types/workout/workout";
import { getWorkoutSessions } from "../api/services";
import { Button } from "../components/ui/Button/Button";
import { WorkoutCalender } from "../WorkoutCalender/WorkoutCalender";
import { type language } from "../types/language";
type Props = {
    language:language;
}

export const WorkoutHistoryPage = ({language}:Props) => {
    
        const [sessionsHistory,setSessionsHistory] = useState<WorkoutSession[]>([]);
        const [loading,setloading] = useState<boolean>(true);
        const [error,setError] = useState<string | null> (null);
        const [selectedDate,setSelectedDate] = useState<string | null> (null);

        const sessionByDate = new Map<string,WorkoutSession[]>();
        sessionsHistory.forEach((session) => {
              const sessiondate = session.date;
              if (!sessiondate) return;
              const existingWorkouts = sessionByDate.get(sessiondate);
               
               if (existingWorkouts){
                sessionByDate.set(sessiondate,[...existingWorkouts,session])
               }
               else {
                sessionByDate.set(sessiondate,[session])
               }
        })
    
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
                <>
                <WorkoutHistoryCard key={sessionHistory.id} id={sessionHistory.id} name={sessionHistory.name} note={sessionHistory.note} date={sessionHistory.date} >
                    <Button variant="primary">View Workout</Button>
                </WorkoutHistoryCard>
                <WorkoutCalender sessions={sessionByDate} language={language} selectedDate={selectedDate} onSelectDate={setSelectedDate}></WorkoutCalender>
                </>
            )

        })}
        </>
    )}
</>
        
    )
}
