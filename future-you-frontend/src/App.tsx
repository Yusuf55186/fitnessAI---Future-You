import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AppShell } from './Layout/AppShell/AppShell';
import { useState } from 'react';
import type { language } from './types/language';
import { AuthWrapper } from './Auth/AuthWrapper';
import { WorkoutSessionPage } from './WorkoutSession/WorkoutSessionPage';
export const App = () => {
  const [language, setLanguage] = useState<language>('nl');
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        
        <Route path="/auth" element={<AuthWrapper />} />
        <Route 
        path="/workout-sessions" 
        element={
          token ? (
        <WorkoutSessionPage  />
          ):(
            <Navigate to={'/auth'} />
          )
        }
          >
        </Route>

        <Route 
          path="/dashboard" 
          element={
            token ? (
              <AppShell language={language} setLanguage={setLanguage} activePath="/dashboard">
                <Dashboard language={language} username="Yusuf" />
              </AppShell>
            ) : (
              
              <Navigate to={'/auth'} />
            
            
              
            )
          } 
        />
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/auth"} />} />
      </Routes>
    </Router>
  );
};
