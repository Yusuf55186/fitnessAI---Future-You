import { StatCard } from "../../features/components/dashboard/StatCard";
import { WorkoutCard } from "../../features/components/workouts/Workout";
import { translations } from "../../il8n/translations";
import type { language } from "../../types/language";
type Props = {
    username:string;
    language:language;
}
export const Dashboard = ({username,language}:Props) => {
    const stats = [
        {
            label:"Workouts",
            value:12
        },
        {
            label:"This week",
            value:4
        },
        {
            label:"Bench PR",
            value:"82.5"
        }
    ]
    const StartWorkouthandler = () => {
        alert("geklikt!")
    } 
    return (
        <div>
            <section className="flex flex-col gap-fy-2">
                <p className="text-fy-xs font-fy-semibold tracking-wider text-fy-accent">{translations[language].morninglabel}</p>
                <h1 className="text-fy-xl text-fy-text font-fy-bold">{translations[language].greeting} {username}</h1>
                <p className="text-fy-md text-fy-text-secondary">{translations[language].subtitle}</p>
                </section>
                <section className="mt-fy-7">
        <h2 className="text-fy-xl font-fy-semibold text-fy-text">
            {translations[language].workoutday}
        </h2>

        <WorkoutCard
        language={language}
            onStart={StartWorkouthandler}
            sessionName={translations[language].workoutday}
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
