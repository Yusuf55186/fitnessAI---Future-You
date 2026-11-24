import { Button } from "../../../components/ui/Button/Button";
import { Card } from "../../../components/ui/Card/Card";
import { translations } from "../../../il8n/translations";
import type { language } from "../../../types/language";
type Props = {
    sessionName:string;
    exerciseCount:number;
    durationTime:number;
    language:language;
    onStart: () => void;
}
export const WorkoutCard = ({sessionName,exerciseCount,durationTime,onStart,language}:Props) => {
    return (
        <Card className="today-workout-card mt-fy-4 flex items-center justify-between" >
            <div className="today-workout-content flex flex-col gap-fy-2">
            <h3 className="text-fy-xl font-fy-semibold text-fy-text">{sessionName}</h3>
            <div className="today-workout-details flex items-center gap-fy-2 text-fy-sm text-fy-text-secondary">
            <p className="text-fy-md font-fy-bold text-fy-accent ">{exerciseCount} {translations[language].workoutexercise}</p>
            <span className="today-workout-separator" aria-hidden="true">.</span>
            <p className="text-fy-sm font-fy-light text-fy-text">{durationTime} min</p>
            </div>
            </div>
            <div>
            <Button className="today-workout-start" variant="primary" onClick={onStart}>
    {translations[language].buttonworkout}
</Button>
</div>
        </Card>
    )
}


