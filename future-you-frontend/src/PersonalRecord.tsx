import { Trophy } from "lucide-react"
import { Card } from "./components/ui/Card/Card"
import { useEffect, useState } from "react"
import { getPersonalRecords } from "./api/services"
import { type PersonalRecord } from "./types/workout/workout"
import { Counter } from "./animations/Counter"
export const PersonalRecords = () => {
    const [pr,setPr] = useState<PersonalRecord[]>([])
    const [error,setError] = useState<string>('');
      const benchPr = pr.find((record) => {
            return record.workout_exercise.exercise_id === 2;
    });
    const roundedBenchPr = Math.round(benchPr?.weight ?? 0);
    useEffect(() => {
       const fetchBenchPr = async () => {
        try {
       const data = await getPersonalRecords();
         setPr(data.data);
        }
        catch(e:unknown){
            setError(e instanceof Error ? e.message : "Couldn't get current PR");
        }
       }
       fetchBenchPr();
    },[])
    return (
        <div className="relative flex w-full flex-col items-center justify-center">

    {error && (
        <p className="text-fy-sm">{error}</p>
    )}

    <Card className="
        showWorkoutCard
        relative flex w-full max-w-lg
        flex-col items-center
        gap-fy-4 p-fy-6
        overflow-hidden text-center
        rounded-2xl
        border border-fy-accent/30
        bg-fy-surface
    ">

        <h3 className="
            text-fy-xs font-fy-semibold
            text-fy-accent tracking-[0.25em]
        ">
            MILESTONE ACHIEVED
        </h3>

        <div className="
            flex h-20 w-20
            items-center justify-center
            rounded-full bg-fy-surface-elevated
        ">
            <Trophy
                className="
                    h-10 w-10 text-fy-accent
                    streak-devil-show
                "
            />
        </div>

        <div>
            <h2 className="
                text-fy-xl font-fy-bold text-fy-text
            ">
                Bench Press
            </h2>

            <p className="
                text-fy-sm text-fy-text-secondary
            ">
                Personal Record Unlocked
            </p>
        </div>

        <div className="
            flex items-baseline justify-center gap-1
            text-fy-accent font-fy-bold
        ">
            
            <span className="text-6xl tabular-nums">
                <Counter duration={2000} value={roundedBenchPr}></Counter>
            </span>
            
            <span className="text-fy-xl">KG</span>
        </div>

        <div className="
            w-full border-t border-fy-text/10
            pt-fy-4
        ">
            <p className="
                text-fy-sm font-fy-semibold
                text-fy-success
            ">
                ✓ New personal best
            </p>
        </div>

    </Card>
</div>
    )
}