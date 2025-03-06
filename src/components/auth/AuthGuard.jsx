import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../../lib/auth";

const AuthGuard = ({ children, requireAdmin = true }) => {
  const location = useLocation();
  const authenticated = isAuthenticated();
  const admin = isAdmin();

  // If not authenticated, redirect to login
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If admin is required but user is not admin, redirect to home
  if (requireAdmin && !admin) {
    return <Navigate to="/" replace />;
  }

  // If authenticated and admin status matches requirement, render children
  return children;
};

export default AuthGuard;
