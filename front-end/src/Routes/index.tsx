import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../Login'

function Router() {
  return (
    <Routes>
      <Route path='/login' element={ <LoginPage /> } />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default Router;
