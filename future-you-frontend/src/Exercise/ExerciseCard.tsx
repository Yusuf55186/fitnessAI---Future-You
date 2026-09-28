import { Card } from "../components/ui/Card/Card"
import { useState } from "react"
import { Button } from "../components/ui/Button/Button"
import { workoutSets } from "../api/services"
import { WorkoutSet } from "../WorkoutSet/WorkoutSet"

type Props = {
    id:number;
    name:string;
    sessionId: number | null;
    onSessionCreated: (sessionId:number) => void;
    existingSets: workoutSet[];
}
type workoutSet = {
    set_number:number;
    weight:number;
    reps:number;
    rir:number;
}
export const ExerciseCard = ({id,name,sessionId,onSessionCreated,existingSets}:Props) => {
    const [weight,setWeight] = useState<string>('');
    const [rir,setRir] = useState<string>('');
    const [reps,setReps] = useState<string>('');
    const [loggedSets,setLoggedSets] = useState<workoutSet[]>(existingSets);
    const handlelogSet = async () => {
        
        if (weight === "" || rir === "" || reps === ""){
        return;
    }
    const convertedWeight = Number(weight);
    const convertedReps = Number(reps);
    const convertedRIR = Number(rir);
       
        const response = await workoutSets(convertedWeight,id,convertedRIR,convertedReps,sessionId)
        onSessionCreated(response.session_id);
        setLoggedSets([
            ...loggedSets,response.data
        ])
        
    }
    
    return (
<Card>
    {name}
   
    <div className="flex overflow-hidden rounded-lg border border-fy-border bg-fy-bg-subtle">

    {/* WEIGHT */}
    <div className="flex flex-1 flex-col gap-2 p-4 border-r border-fy-border">
        <label
            htmlFor={`weight-${id}`}
            className="text-xs font-semibold uppercase tracking-wider text-fy-muted"
        >
            Weight
        </label>

        <div className="flex items-center">
            <input
                type="number"
                min="0"
                id={`weight-${id}`}
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className="w-full bg-transparent text-lg font-semibold text-fy-text outline-none"
            />
            <span className="text-xs font-semibold text-fy-muted">
                KG
            </span>
        </div>
    </div>

    {/* REPS */}
    <div className="flex flex-1 flex-col gap-2 p-4 border-r border-fy-border">
        <label
            htmlFor={`reps-${id}`}
            className="text-xs font-semibold uppercase tracking-wider text-fy-muted"
        >
            Reps
        </label>

        <input
            type="number"
            min="1"
            id={`reps-${id}`}
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className="w-full bg-transparent text-lg font-semibold text-fy-text outline-none"
        />
    </div>

    {/* RIR */}
    <div className="flex flex-1 flex-col gap-2 p-4">
        <label
            htmlFor={`rir-${id}`}
            className="text-xs font-semibold uppercase tracking-wider text-fy-muted"
        >
            RIR
        </label>

        <input
            type="number"
            min="0"
            max="4"
            id={`rir-${id}`}
            onChange={(e) => setRir(e.target.value)}
            value={rir}
            className="w-full bg-transparent text-lg font-semibold text-fy-text outline-none"
        />
    </div>

</div>
    <Button onClick={handlelogSet} variant="primary">Log Set</Button>
    {loggedSets.map((loggedSet) => {
        return (
            <div className="flex gap-fy-4">
        <WorkoutSet
         key={loggedSet.set_number} 
       
         set_number={loggedSet.set_number} 
         reps={loggedSet.reps} 
         weight={loggedSet.weight} 
         rir={loggedSet.rir}>
            </WorkoutSet>
            </div>
        )
    })}
</Card>
    )
}