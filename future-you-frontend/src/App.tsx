import { useState } from "react";
import { AppShell } from "./Layout/AppShell/AppShell";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import type { language } from "./types/language";
export const App = () =>{
  const [language,setLanguage] = useState<language>('nl');
  
 
  return (
    <>
    
    <AppShell language={language} setLanguage={setLanguage} activePath="/dashboard">
      <Dashboard language={language} username="Yusuf"></Dashboard>
        </AppShell>

   
    </>   
  )
}
