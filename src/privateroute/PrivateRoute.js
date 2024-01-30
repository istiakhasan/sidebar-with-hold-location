/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config/firebase.config";
import { signOut } from "firebase/auth";
import { baseUrs } from "../helpers/config/config.Env";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [permission, setPermission] = useState(true);
  const navigate = useNavigate();
  const [permssionLoading,setPermissionLoasing]=useState(false)

  useEffect(() => {
    setPermissionLoasing(true)
    if (location.pathname.split("/")[1]) {

      fetch(
        `${baseUrs()}/routelisttwo/protect?email=${user?.email}&path=${location?.pathname}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setPermission(true);
          } else {
            signOut(auth).then((res) => {
              navigate("/");
            });
          }
        });
    } else {
    }
    setPermissionLoasing(false)
  }, [user?.email, location.pathname]);

  if (loading || permssionLoading) {
    return;
  }
  if (!user || !permission) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
