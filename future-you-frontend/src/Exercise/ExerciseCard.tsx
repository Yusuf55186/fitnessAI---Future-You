import { Card } from "../components/ui/Card/Card"
import { useState } from "react"
import { Button } from "../components/ui/Button/Button"
import { workoutSets } from "../api/services"
type Props = {
    id:number;
    name:string;
    sessionId: number | null;
    onSessionCreated: (sessionId:number) => void;
}
export const ExerciseCard = ({id,name,sessionId,onSessionCreated}:Props) => {
    const [weight,setWeight] = useState<string>('');
    const [rir,setRir] = useState<string>('');
    const [reps,setReps] = useState<string>('');
    
    const handlelogSet = async () => {
        
        if (weight === "" || rir === "" || reps === ""){
        return;
    }
    const convertedWeight = Number(weight);
    const convertedReps = Number(reps);
    const convertedRIR = Number(rir);
        console.log({weight,rir,reps})
        const response = await workoutSets(convertedWeight,id,convertedRIR,convertedReps,sessionId)
        console.log(response);
    }
    
    return (
<Card>
    {name}
    <label htmlFor={`weight-${id}`}>Weight</label>
    <input type="number" min="0" id={`weight-${id}`}onChange={(e) =>  setWeight(e.target.value)} value={weight} />
        <label htmlFor={`reps-${id}`}>Reps</label>
    <input type="number" min="1" id={`reps-${id}`} onChange={(e) => setReps(e.target.value)} value={reps} />
        <label htmlFor={`rir-${id}`}>RIR</label>
    <input type="number" id={`rir-${id}`} min="0" max="4" onChange={(e) => setRir(e.target.value)} value={rir} />
    <Button onClick={handlelogSet} variant="primary">Log Set</Button>
</Card>
    )
}