import { Card } from "../../../components/ui/Card/Card"
type Props = {
    label:string;
    value:number | string;
}
export const StatCard = ({value,label}:Props) => {
   
    return (
        <Card>
            <p className="text-fy-2xl font-fy-bold text-fy-text">
                {value}
            </p>
            <p>{label}</p>
        </Card>
    )

}