import './App.css';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './Administrateur/AdminDashboard';
import Login from './Login';
import {Routes, Route, Navigate} from "react-router-dom";
import UserDashboard from './User/UserDashboard';
import { getUserRole } from './Services/auth';

function App() {
  return (  
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
          getUserRole() === "USER" ? <UserDashboard /> : <Navigate to="/login" />
        }
      />
      <Route path="/admin" element={
          getUserRole() === "ADMIN" ? (
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          ) : (<Navigate to="/login" />)
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
 
  );
}

export default App;
