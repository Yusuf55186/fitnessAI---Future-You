import { Button } from "./components/ui/Button/Button";
import { Card } from "./components/ui/Card/Card"
export const App = () =>{
  const startWorkout = () => {
    console.log("Start workout");
  }
 
  return (
    <>
    <Card> <h1>Today's workout</h1> <p>Push day</p>
    <div className="buttons-wrapper">
    <Button onClick={startWorkout}  variant="primary">Start Workout</Button>
    <Button variant="secondary">View Progress</Button>
    <Button variant="ghost">Cancel</Button>
    </div>
    </Card>
   </>
   
  )
}
