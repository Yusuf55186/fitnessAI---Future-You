import { useEffect, useState } from "react"
import { Button } from "../ui/Button/Button";
 type Props = {
        created_at:string;
    }
export const WorkoutTimer = ({created_at}:Props) => {
    const [Timepassed,setTimePassed] = useState<number>(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;
        const startTime = new Date(created_at).getTime();
        const interval = setInterval(() => {
            setTimePassed((Math.floor(Date.now()) - startTime) / 1000 )
        }, 1000);
        return () => clearInterval(interval);
    }, [created_at, isRunning]);
    const formattedHours = Math.floor(Timepassed / 3600).toString().padStart(2,"0");
    const formattedMinutes = Math.floor((Timepassed /60) % 60).toString().padStart(2,"0");
    const formattedSeconds = Math.floor(Timepassed % 60).toString().padStart(2,"0");
   const time = `${formattedHours}-${formattedMinutes}-${formattedSeconds}`;
   
    function stopWorkoutHandler(): void {
        setIsRunning(false);
    }
    function resumeWorkoutHandler() : void {
        setIsRunning(true);
    }

    return (
        <div className="flex justify-center items-center">
        <div className="border border-fy-border bg-fy-surface rounded-md p-4 mt-4 w-[60ch] ">
            <div className="text-center items-center flex gap-fy-4">
                             <h3 className="text-fy-muted font-fy-bold "> • Future you</h3>
             <i className="text-fy-accent text-fy-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock preview-icon"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
             </i>
             
    <span  className="text-fy-success font-fy-bold text-fy-xl">{time}</span>
    <Button onClick={() => stopWorkoutHandler()} variant="secondary">STOP</Button>
        <Button onClick={() => resumeWorkoutHandler()} variant="primary">Resume</Button>
    </div>
    </div>
    </div>
)
}

