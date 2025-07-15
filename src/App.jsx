import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import FriendRequests from './pages/FriendRequests';
import Home from './pages/Home';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Analytics from './pages/Analytics';

function App() {
  
  return ( <>
    <Router>
    <AuthProvider>
      
          <Routes>
            <Route path="/login" element={<Login />} />

         <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
      <Route path="/posts" element={<PrivateRoute><Posts /></PrivateRoute>} />
       <Route path="/friendRequests" element={<PrivateRoute><FriendRequests /></PrivateRoute>} />
         <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
         <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
         <Route path="/report" element={<PrivateRoute><Reports /></PrivateRoute>} />
         <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
       </Routes>        
     </AuthProvider>
     </Router>
    </>
    
  );
}

export default App;

    {/*  <Navbar /> */}