import { Card } from "../components/ui/Card/Card";


type Props = {
    set_number: number;
    weight:number;
    rir:number;
    reps:number;
}
export const WorkoutSet = ({set_number,weight,rir,reps}:Props) => {
    return (
      
      
        <Card className="flex w-full gap-fy-4 mt-fy-4">
        <div className="flex-1 flex-col">
            <span className="text-fy-muted text-fy-sm">Sets:</span>
        <span>{set_number}</span>
        </div>
                <div className="flex-1 flex-col">

        <span>Weight:</span>
        <span>{weight}</span>
        </div>
               <div className="flex-1 flex-col">

            <span>RIR:</span>
        <span>{rir}</span>
        </div>
                <div className="flex-1 flex-col">

        <span>Reps:</span>
        <span>{reps}</span>
        </div>
        </Card>
        
    )
}