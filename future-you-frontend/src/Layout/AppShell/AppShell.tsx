import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export const AppShell = () => {
    return (
        <div className="min-h-screen bg-fy-bg text-fy-text">
            <Header />

            <div className="flex">
                <Sidebar />

                <main>
                </main>
            </div>
        </div>
    );
};