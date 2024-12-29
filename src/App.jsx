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
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Layout>{children}</Layout>;
  };
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route 
        path="/login" 
        element={<Login setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/instagram"
        element={
          <ProtectedRoute>
            <InstagramPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/facebook"
        element={
          <ProtectedRoute>
            <FacebookPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/x"
        element={
          <ProtectedRoute>
            <TwitterPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/linkedln"
        element={
          <ProtectedRoute>
            <LinkedInPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/comingsoon"
        element={
          <ProtectedRoute>
            <FeatureComingSoon/>
          </ProtectedRoute>
        }
      />
       <Route
        path="/dashboard/comingsoon"
        element={
          <ProtectedRoute>
            <FeatureComingSoon/>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;
