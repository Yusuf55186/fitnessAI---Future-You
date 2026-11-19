type Props = {
    onLogout: () => Promise<void>;
}
import { Button } from "./ui/Button/Button"
export const LogoutUser = ({onLogout}:Props) => {
    return (
        <Button onClick={onLogout} variant="secondary">Log out</Button>
        
    )
}