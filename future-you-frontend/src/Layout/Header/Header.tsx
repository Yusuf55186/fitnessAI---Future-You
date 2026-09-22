import { Logo } from "../../components/ui/Logo/Logo"
import { Navigation } from "../Navigation"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { Account } from "../Account"
export const Header = () => {
    return (
        <header className="flex gap-fy-4 min-h-10 items-center bg-fy-subtle justify-between">
            
            <Logo></Logo>
            <Navigation></Navigation>
            <LanguageSwitcher></LanguageSwitcher>
            <Account></Account>
            
        </header>
    )
}