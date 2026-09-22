import { Card } from "../../../components/ui/Card/Card";
type Props = {
    sessionName:string;
    exerciseCount:number;
    durationTime:number;
    onStart: () => void;
}
export const WorkoutCard = ({sessionName,exerciseCount,durationTime,onStart}:Props) => {
    return (
        <Card >
            
            <h1>{sessionName}</h1>
            <p>{exerciseCount}exercises</p>
            <p>{durationTime}min</p>
            
        </Card>
    )
}


