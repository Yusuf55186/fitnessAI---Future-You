import { Card } from "../components/ui/Card/Card";

type Props = {
    id:number;
    name:string;
    note:string | null;
    date:string | null;
    
    
    
}
export const WorkoutHistoryCard = ({id,name,note,date}: Props) => {
    


    return (
      
        <Card key={id}>
            <p>{name}</p>
            <p>{date}</p>
            <p>{note}</p>
            </Card>
    )
}