import { Card } from "../components/ui/Card/Card";


type Props = {
    set_number: number;
    weight:number;
    rir:number;
    reps:number;
}
export const WorkoutSet = ({set_number,weight,rir,reps}:Props) => {
    return (
      
      
        <Card className="workout-set-summary">
        <div className="workout-set-metric">
            <span className="text-fy-muted text-fy-sm">Sets:</span>
        <span>{set_number}</span>
        </div>
                <div className="workout-set-metric">

        <span>Weight:</span>
        <span>{weight}</span>
        </div>
               <div className="workout-set-metric">

            <span>RIR:</span>
        <span>{rir}</span>
        </div>
                <div className="workout-set-metric">

        <span>Reps:</span>
        <span>{reps}</span>
        </div>
        </Card>
        
    )
}