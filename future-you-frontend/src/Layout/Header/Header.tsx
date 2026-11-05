import { Logo } from "../../components/ui/Logo/Logo";
import { Navigation } from "../Navigation";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Account } from "../Account";
import type { language } from "../../types/language";
import { useState } from "react";
type Props = {
    language: language;
    setLanguage: (language: language) => void;
};

export const Header = ({ language,setLanguage}: Props) => {
    const [username] = useState<string>(() => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) return "";

  try {
    const user = JSON.parse(storedUser);
    return user.name ?? "";
  } catch {
    return "";
  }
});
    return (
        <header
            className="
                sticky top-0 z-50
                flex h-fy-topbar w-full
                items-center justify-between
                border-b border-fy-border
                bg-fy-subtle/95
                px-fy-5
                backdrop-blur-md
            "
        >
            <div className="flex shrink-0 items-center">
                <Logo />
            </div>

            <nav className="hidden lg:flex items-center">
                <Navigation />
            </nav>

            <div className="flex items-center gap-fy-4">
                <LanguageSwitcher
                    language={language}
                    setLanguage={setLanguage}
                />

                <div className="h-7 w-px bg-fy-border" />

                <Account username={username} />
            </div>
        </header>
    );
}