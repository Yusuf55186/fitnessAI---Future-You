 import { useEffect, useState } from "react"
 type Props = {
        created_at:string;
    }
export const WorkoutTimer = ({created_at}:Props) => {
    const [Timepassed,setTimePassed] = useState<number>(0);

    useEffect(() => {
        const startTime = new Date(created_at).getTime();
       const interval = setInterval(() => {
            setTimePassed((Math.floor(Date.now()) - startTime) / 1000 )
        },1000);
        return () => {
            clearInterval(interval)
        }
    },[created_at])
    const formattedHours = Math.floor(Timepassed / 3600).toString().padStart(2,"0");
    const formattedMinutes = Math.floor((Timepassed /60) % 60).toString().padStart(2,"0");
    const formattedSeconds = Math.floor(Timepassed % 60).toString().padStart(2,"0");
    const time = `${formattedHours}-${formattedMinutes}-${formattedSeconds}`;

    return (
        
    <span>{time}</span>
)
}

