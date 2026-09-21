import { Button } from "./components/ui/Button/Button";
export const App = () =>{
  return (
    <>
    <div className="buttons-wrapper">
    <Button variant="primary">Start Workout</Button>
    <Button variant="secondary">View Progress</Button>
    <Button variant="ghost">Cancel</Button>
    </div>
    </>
  )
}
