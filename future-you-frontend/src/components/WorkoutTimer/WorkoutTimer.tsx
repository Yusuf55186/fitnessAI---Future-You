import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/Button/Button";
 type Props = {
        created_at:string;
        isFinished:boolean;
    }
export const WorkoutTimer = ({created_at,isFinished}:Props) => {
   
    const [startTime, setStartTime] = useState<number>(() => {
        console.log(created_at)
        const parsedDate = new Date(created_at);
         const savedReset = localStorage.getItem("setTimer");
        const resetTime = savedReset !== null ? Number(savedReset) : parsedDate.getTime();
        return resetTime;
    });
    const savedPause = localStorage.getItem("pausedMoment");
    const pauseStarted = useRef<number | null>(
        savedPause !== null ? Number(savedPause) : null
    );
    const [isRunning, setIsRunning] = useState<boolean>(
    () => savedPause === null ? true : false
);
     const [Timepassed, setTimePassed] = useState<number>(
    () => (
        (savedPause !== null ? Number(savedPause)
        : Date.now()) - startTime) / 1000
     )
    
    
    useEffect(() => {
        if (!isRunning || isFinished) return;
        const interval = setInterval(() => {
             setTimePassed(((Date.now()) - startTime) / 1000)
        }, 1000);
        return () => clearInterval(interval);
    },[created_at, isRunning,startTime,isFinished]);
    const formattedHours   = Math.floor(Timepassed / 3600).toString().padStart(2,"0");
    const formattedMinutes = Math.floor((Timepassed /60) % 60).toString().padStart(2,"0");
    const formattedSeconds = Math.floor(Timepassed % 60).toString().padStart(2,"0");
    const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


    function pauseWorkoutHandler(): void {
        setIsRunning(false);
         if (pauseStarted.current === null){
        pauseStarted.current = Date.now();
        const elapsedSeconds = (pauseStarted.current - startTime)/1000
        setTimePassed((elapsedSeconds));
        localStorage.setItem('pausedMoment',pauseStarted.current.toString());
         }
    }
    
    function resumeWorkoutHandler() : void {
        localStorage.removeItem('pausedMoment');
        setIsRunning(true);
        if (pauseStarted.current){
            
            const pauseDurationMs = Date.now() - pauseStarted.current;
            const newStartTime = pauseDurationMs + startTime;
            setStartTime(newStartTime)
            localStorage.setItem('setTimer',newStartTime.toString());

        pauseStarted.current = null;
        }
    }
    function resetWorkoutHandler() : void {
            const reset = Date.now();
            setStartTime(reset);
           localStorage.setItem('setTimer',reset.toString());
            setTimePassed(0);

              
        }

    return (
        
        <div className="flex justify-center items-center">
            
         <div className="border border-fy-border bg-fy-surface rounded-md p-4 mt-4 w-[60ch] ">
            <div className="text-center items-center flex gap-fy-4">
                <h3 className="text-fy-muted font-fy-bold "> • Future you</h3>
                <i className="text-fy-accent text-fy-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock preview-icon"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
             </i>
             
    <span className="text-fy-success font-fy-bold text-fy-xl">{time}</span>
        <Button onClick={() => pauseWorkoutHandler()} variant="secondary">Pause</Button>
        <Button onClick={() => resumeWorkoutHandler()} variant="primary">Resume</Button>
        <Button onClick={() => resetWorkoutHandler()} variant="ghost">Reset</Button>
    </div>
    </div>
    </div>
)
}

