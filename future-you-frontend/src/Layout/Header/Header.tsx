import { Logo } from "../../components/ui/Logo/Logo";
import { Navigation } from "../Navigation";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Account } from "../Account";
import type { language } from "../../types/language";
import { useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoutUser } from "../../components/Logout";
const mobileLinks = [
    { to: "/dashboard", label: { nl: "Dashboard", en: "Dashboard", arz: "الرئيسية" } },
    { to: "/workout-sessions", label: { nl: "Training", en: "Workout", arz: "التمرين" } },
    { to: "/history", label: { nl: "Geschiedenis", en: "History", arz: "سجل التمرين" } },
    { to: "/posts", label: { nl: "Futurize", en: "Futurize", arz: "Futurize" } },
    { to: "/account", label: { nl: "Account", en: "Account", arz: "الحساب" } },
];

type Props = {
    language: language;
    setLanguage: (language: language) => void;
    onLogout: () => Promise<void>;
};

export const Header = ({ language,setLanguage,onLogout}: Props) => {
    const navigate = useNavigate();
    const menuId = useId();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [username] = useState(
     () => localStorage.getItem('username') ?? ""
    );
    const NavigateToHome = () => {
        setIsMenuOpen(false);
        navigate('/')
    }
    return (
        <header className="app-shell-header">
            <div className="app-shell-header-identity">
                <div className="app-shell-brand">
                    <Logo className="cursor-pointer hover:scale-105 translate-y-1 logo-transition ease-in" onClick={NavigateToHome} />
                </div>
                <Link to="/account" className="app-shell-account" aria-label="Account" onClick={() => setIsMenuOpen(false)}>
                    <Account username={username} />
                </Link>
                <button
                    type="button"
                    className="app-shell-menu-toggle"
                    aria-label={language === "arz" ? "القائمة الرئيسية" : language === "nl" ? "Hoofdmenu" : "Main menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls={menuId}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
                </button>
            </div>

            <nav className="app-shell-header-navigation">
                <Navigation />
            </nav>

            <div id={menuId} className="app-shell-header-preferences" data-open={isMenuOpen}>
                <nav
                    className="app-shell-mobile-navigation"
                    aria-label={language === "arz" ? "التنقل الرئيسي" : language === "nl" ? "Hoofdnavigatie" : "Main navigation"}
                >
                    <ul>
                        {mobileLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} onClick={() => setIsMenuOpen(false)}>
                                    {label[language]}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="app-shell-header-language">
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                </div>
                <div className="app-shell-header-logout">
                    <LogoutUser onLogout={onLogout} />
                </div>
            </div>
        </header>
    );
}