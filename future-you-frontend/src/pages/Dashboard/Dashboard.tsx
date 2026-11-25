import { StatCard } from "../../features/components/dashboard/StatCard";
import { WorkoutCard } from "../../features/components/workouts/Workout";
import { translations } from "../../il8n/translations";
import type { language } from "../../types/language";
import { useState } from "react";
import { useEffect } from "react";
import { getWorkoutSessions} from "../../api/services";
// import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { getPersonalRecords } from "../../api/services";
import { type PersonalRecord } from "../../types/workout/workout";
import { type WorkoutSession } from "../../types/workout/workout";
type Props = {
    username:string;
    language:language;
}

export const Dashboard = ({username,language}:Props) => {
    
    const [workoutSessions, setWorkoutSessions] = useState<WorkoutSession[]>([]);
const [pr, setPr] = useState<PersonalRecord[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const benchPr = pr.find((record) => {
            return record.workout_exercise.exercise_id === 2;
    });
    const startWeek = new Date();
    const day = startWeek.getDay() ;
    const daysSinceMonday = day === 0 ? 6 : day -1;
    startWeek.setDate(startWeek.getDate() - daysSinceMonday);
    startWeek.setHours(0,0,0,0);
    const endWeek = new Date(startWeek);
    endWeek.setDate(endWeek.getDate() + 7);
    const weeklySessions = workoutSessions.filter((session,) => {
         if (session.date === null) return false;
         const sessionDate = new Date(session.date);
         return sessionDate >= startWeek && sessionDate < endWeek ;
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getWorkoutSessions();
        setWorkoutSessions(data);
            }
            catch (err: unknown) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred");
            }
            finally {
                setLoading(false);
            }
        }
        const fetchPR = async  () => {
            try {
                const data = await getPersonalRecords();
                setPr(data.data);
            }
             catch (err: unknown) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred");
            }
        }
        fetchData();
        fetchPR();
    },[]);
const stats = [
        {
            label:translations[language].workoutexercise
            ,value:workoutSessions.length
        },
        {
            label:translations[language].week,
            value:weeklySessions.length
        },
        {
            label:"Bench PR",
            value:benchPr?.weight ?? 0
        }
    ]
    console.log('startweek',startWeek)
    console.log('endweek',endWeek)
    console.log('Weekly stats',weeklySessions);
    if (error) return <div>Error: {error}</div>;
    if (loading) return <div>Loading...</div>;

    const StartWorkouthandler = () => {
        navigate("/workout-sessions");
    } 
    return (
        <div>
            <section className="flex flex-col gap-fy-2">
                <p className="text-fy-xs font-fy-semibold tracking-wider text-fy-accent">{translations[language].morninglabel}</p>
                <h1 className="text-fy-xl text-fy-text font-fy-bold">{translations[language].greeting} {username}</h1>
                <p className="text-fy-md text-fy-text-secondary">{
                translations[language].subtitle}</p>
                <p className="text-fy-md text-fy-accent font-fy-bold">
                {translations[language].humor}</p>
                </section>
                <section className="mt-fy-7">
        <h2 className="text-fy-xl font-fy-semibold text-fy-text">
            
            {translations[language].workout}
        </h2>
        <WorkoutCard
        language={language}
            onStart={StartWorkouthandler}
            sessionName={translations[language].workoutday}
            exerciseCount={workoutSessions.length}
            durationTime={45}
        />
    </section>
    <div className="dashboard-stats">
            {stats.map((stat)=>{
                return (
                    <StatCard key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    
                    />
                    
                )
            })}
            </div>
        </div>
        
    )
}
