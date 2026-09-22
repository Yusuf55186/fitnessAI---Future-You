import { Button } from "./components/ui/Button/Button";
import { WorkoutCard } from "./features/components/workouts/Workout";
import { Header } from "./Layout/Header/Header";
export const App = () =>{
  const startWorkout = () => {
    console.log("Start workout");
  }
  const onStart = () => {
    console.log("geklikt!");
  }
 
  return (
    <>
    <Header ></Header>
    <WorkoutCard sessionName={"Push day"} exerciseCount={6} durationTime={45} onStart={onStart}
    
    
    >      
    </WorkoutCard>
    <div className="buttons-wrapper">
    <Button onClick={startWorkout}  variant="primary">Start Workout</Button>
    <Button variant="secondary">View Progress</Button>
    <Button variant="ghost">Cancel</Button>
    </div>
   
    

    </>
    
       
  )
}
