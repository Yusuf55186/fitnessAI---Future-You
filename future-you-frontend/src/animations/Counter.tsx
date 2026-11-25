import { useEffect, useState } from "react";
type Props = {
    duration?:number;
    value:number;
    className?:string;
}
export const Counter = ({duration=1000,value,className}:Props) => {
    const [count,setCount] = useState<number>(0);

    useEffect(() => {
        const startTime = performance.now();
        let frameId:number;
        const animate = () =>
             {
                const elapsedTime = performance.now() - startTime;
                const progress = Math.min(elapsedTime / duration,1);
                if (progress < 1){
                    frameId =  requestAnimationFrame(animate);
                }
                setCount(Math.round(progress * value))
            }; 
            
       requestAnimationFrame(animate)
        
        return () => {
        cancelAnimationFrame(frameId);
        }
    },[value,duration])

    return (
        <span className={className}>{count}</span>
        
    )
    
}