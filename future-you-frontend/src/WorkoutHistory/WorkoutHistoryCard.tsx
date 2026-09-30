import type { ReactNode } from "react";
import { Card } from "../components/ui/Card/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button/Button";
type Props = {
    id:number;
    name:string;
    note:string | null;
    date:string | null;
    children:ReactNode
    
    
}
export const WorkoutHistoryCard = ({id,name,note,date,children}: Props) => {
    const navigate = useNavigate();

     const viewWorkoutHandler = () => {
         navigate(`/workout-sessions/${id}`);
     }

    return (

        <Card key={id} className="flex items-center justify-between gap-fy-4 border-fy-border bg-fy-surface  p-5  mt-fy-4">
    <div className="flex flex-col gap-fy-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-fy-accent">
            Workout
        </span>

        <p className="text-lg font-semibold text-fy-text">
            {name}
        </p>

        {note && (
            <p className="text-sm text-fy-muted">
                {note}
            </p>
        )}
    </div>

    <p className="text-sm text-fy-muted">
        {date}
    </p>
    {children}
<Button variant="primary" onClick={viewWorkoutHandler}>View workout</Button>
</Card>


    )
}