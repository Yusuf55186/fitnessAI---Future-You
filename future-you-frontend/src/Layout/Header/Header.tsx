import { Logo } from "../../components/ui/Logo/Logo"
import { Navigation } from "../Navigation"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { Account } from "../Account"
import type { language } from "../../types/language"
type Props = {
    language:language;
    setLanguage:(language:language) =>void;
}
export const Header = ({language,setLanguage}:Props) => {
    return (
        <header className="flex gap-fy-4 h-fy-topbar px-fy-5 items-center bg-fy-subtle justify-between">
            
            <Logo></Logo>
            <Navigation></Navigation>
            <div className="flex items-center gap-fy-4">
               
            <LanguageSwitcher language={language} setLanguage={setLanguage}></LanguageSwitcher></div>
            <Account></Account>
            
            
        </header>
    )
}