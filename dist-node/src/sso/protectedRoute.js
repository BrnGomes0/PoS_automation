import { jsx as _jsx } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Navigate } from "react-router-dom";
import { useLogout } from '../components/LogoutProvider/LogoutProvider';
const ProtectedRoute = ({ children }) => {
    const { isLoggingOut } = useLogout();
    const isAuthenticated = useIsAuthenticated();
    // const { accounts } = useMsal();
    // if (!accounts[0]) {
    //   return <Navigate to="/login" />;
    // }
    return isAuthenticated ? children : _jsx(Navigate, { to: "/login" });
};
// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired
// };
export default ProtectedRoute;
