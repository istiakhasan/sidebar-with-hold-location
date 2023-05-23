import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.config/firebase.config";

const PermissionRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [permission, setPermission] = useState(false);
  const location = useLocation();
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/routelisttwo/protect")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setPermission(true);
        }
      });
  }, []);
console.log(permission,"permission");
  if (loading) {
    return;
  }
  if (!user && !permission) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default PermissionRoute;
