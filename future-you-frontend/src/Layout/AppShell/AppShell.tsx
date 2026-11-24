import type { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import type { language } from "../../types/language";
type Props = {
    children: ReactNode;
    activePath:string;
    language:language;
    onLogout: () => Promise<void>;
    setLanguage:(language:language) =>void;
}
export const AppShell = ({children,activePath,language,setLanguage,onLogout}:Props) => {
    return (
        <div 
        className="app-shell"
        dir={language === "arz" ? "rtl" : "ltr"}
        >
            <Header onLogout={onLogout} language={language} setLanguage={setLanguage}  />

            <div className="app-shell-layout">
                <Sidebar activePath={activePath}/>

                <main className="app-shell-main">
                    {children}
                </main>
            </div>
        </div>
    );
}