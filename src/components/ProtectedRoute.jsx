import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../configuration/UserAuthContext";

const ProtectedRoute = ({ props }) => {
  let user = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return props;
};

export default ProtectedRoute;
