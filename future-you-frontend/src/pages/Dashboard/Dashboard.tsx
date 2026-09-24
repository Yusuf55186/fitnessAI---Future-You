import { StatCard } from "../../features/components/dashboard/StatCard";
import { WorkoutCard } from "../../features/components/workouts/Workout";
import { translations } from "../../il8n/translations";
import type { language } from "../../types/language";
import { useState } from "react";
import { useEffect } from "react";
import { getWorkoutSessions} from "../../api/services";
import { useNavigate } from "react-router-dom";

type Props = {
    username:string;
    language:language;
}
export const Dashboard = ({username,language}:Props) => {
    const stats = [
        {
            label:translations[language].workout
            ,value:12
        },
        {
            label:translations[language].week,
            value:4
        },
        {
            label:"Bench PR",
            value:"82.5"
        }
    ]
    const [workoutSessions, setWorkoutSessions] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getWorkoutSessions();
        setWorkoutSessions(data);
            }
            catch (err:any) {
                setError(err.message)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);

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
            {translations[language].workoutday}
        </h2>
        <p>{workoutSessions.length}workouts</p>

        <WorkoutCard
        language={language}
            onStart={StartWorkouthandler}
            sessionName={translations[language].workout}
            exerciseCount={6}
            durationTime={45}
        />
    </section>
    <div className="grid grid-cols-3 gap-fy-6 mt-5">
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
