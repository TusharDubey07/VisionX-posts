import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashbaord';
import InstagramPage from './pages/Instagram';
import FacebookPage from './pages/Facebook';
import LinkedInPage from './pages/Linkedln';
import TwitterPage from './pages/Twitter';
import FeatureComingSoon from './pages/Comingsoon';
import Layout from './components/Layout';
import ClientDashboard from './pages/ClientDashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const ProtectedRoute = ({ children, allowedUserType }) => {
    if (!isAuthenticated || userType !== allowedUserType) {
      return <Navigate to="/login" replace />;
    }
    return <Layout userType={userType}>{children}</Layout>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} />} 
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedUserType="company">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute allowedUserType="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard/instagram"
          element={
            <ProtectedRoute allowedUserType="client">
              <InstagramPage />
            </ProtectedRoute>
            }
          />
        <Route
          path="/dashboard/instagram"
          element={
            <ProtectedRoute allowedUserType="company">
              <InstagramPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard/facebook"
          element={
            <ProtectedRoute allowedUserType="client">
              <FacebookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard/x"
          element={
            <ProtectedRoute allowedUserType="client">
              <TwitterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard/linkedln"
          element={
            <ProtectedRoute allowedUserType="client">
              <LinkedInPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard/comingsoon"
          element={
            <ProtectedRoute allowedUserType="client">
              <FeatureComingSoon />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/facebook"
          element={
            <ProtectedRoute allowedUserType="company">
              <FacebookPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/x"
          element={
            <ProtectedRoute allowedUserType="company">
              <TwitterPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/linkedln"
          element={
            <ProtectedRoute allowedUserType="company">
              <LinkedInPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/comingsoon"
          element={
            <ProtectedRoute allowedUserType="company">
              <FeatureComingSoon/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
