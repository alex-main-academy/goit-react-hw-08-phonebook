import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const isAuth = useSelector(state => state.auth.isAuth);
  const shouldRedirect = isAuth && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
