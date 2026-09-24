import { Card } from "../components/ui/Card/Card"
import { useState } from "react"
import { Button } from "../components/ui/Button/Button"
type Props = {
    id:number,
    name:string
}
export const ExerciseCard = ({id,name}:Props) => {
    const [weight,setWeight] = useState<string>('');
    const [rir,setRir] = useState<string>('');
    const [reps,setReps] = useState<string>('');
    
    return (
<Card>
    {name}
    <label htmlFor={`weight-${id}`}>Weight</label>
    <input type="number" min="0" id={`weight-${id}`}onChange={(e) =>  setWeight(e.target.value)} value={weight} />
        <label htmlFor={`reps-${id}`}>Reps</label>
    <input type="number" min="1" id={`reps-${id}`} onChange={(e) => setReps(e.target.value)} value={reps} />
        <label htmlFor={`rir-${id}`}>RIR</label>
    <input type="number" id={`rir-${id}`} min="0" max="4" onChange={(e) => setRir(e.target.value)} value={rir} />
    <Button variant="primary">Log Set</Button>
</Card>
    )
}