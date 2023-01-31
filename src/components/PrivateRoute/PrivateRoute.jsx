import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  let { user, loading } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user?.email && !user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
