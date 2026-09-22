import type { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import type { language } from "../../types/language";
type Props = {
    children: ReactNode;
    activePath:string;
    language:language;
    setLanguage:(language:language) =>void;
}
export const AppShell = ({children,activePath,language,setLanguage}:Props) => {
    return (
        <div className="min-h-screen bg-fy-bg text-fy-text">
            <Header language={language} setLanguage={setLanguage}  />

            <div className="flex min-h-[calc(100vh-var(--topbar-height))] w-full max-w-fy-page">
                <Sidebar activePath={activePath}/>

                <main className="flex-1 p-fy-6">
                    {children}
                </main>
            </div>
        </div>
    );
};