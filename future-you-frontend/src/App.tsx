import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AppShell } from './Layout/AppShell/AppShell';
import { useState } from 'react';
import type { language } from './types/language';
import { AuthWrapper } from './Auth/AuthWrapper';
import { WorkoutSessionPage } from './WorkoutSession/WorkoutSessionPage';
import { WorkoutHistoryPage } from './WorkoutHistory/WorkoutHistoryPage';
import FuturizePage from './Posts/FuturizePosts';

export const App = () => {
  const [language, setLanguage] = useState<language>('nl');
    const [username,setUsername] = useState(
     () => localStorage.getItem('username') ?? ""
    );
  const token = localStorage.getItem('token');
  return (
    <>
  
    
    <Router>
  <Routes>
    <Route path="/auth" element={<AuthWrapper onLogged={setUsername} onRegistered={setUsername} />} />

    <Route
      element={
        token ? (
          <AppShell activePath='' language={language} setLanguage={setLanguage}>
            <Outlet />
          </AppShell>
        ) : (
          <Navigate to="/auth" />
        )
      }
    >
      <Route path="/workout-sessions" element={<WorkoutSessionPage language={language} />} />
      <Route path="/workout-sessions/:id" element={<WorkoutSessionPage language={language} />} />
      <Route 
    path="/posts"
    element={<FuturizePage language={language} />}
    />
      <Route
        path="/history"
        element={<WorkoutHistoryPage language={language} />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard language={language} username={username}/>}
      />
    </Route>
    
    <Route path="/" element={<Navigate to={token ? "/dashboard" : "/auth"} />} />
  </Routes>
</Router>
    </>
  );
};
