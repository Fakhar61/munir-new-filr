import { Navigate, Outlet } from 'react-router-dom';

export const InitialAccessGate = () => {
  const hasAccess = sessionStorage.getItem('authenticated') === 'true';

  // If the user hasn't passed the first gate, redirect them.
  if (!hasAccess) {
    return <Navigate to="/access" replace />;
  }

  // If they have access, render the nested routes (i.e., the main app).
  return <Outlet />;
};
export default InitialAccessGate;