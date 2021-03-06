import React from "react";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const user = {};
  if (!user) return <Navigate to="/login" />;
  return <div>{children}</div>;
};

export default AuthLayout;
