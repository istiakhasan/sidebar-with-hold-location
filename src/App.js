import React, { Suspense, useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routingList } from "./routinglist";
import Example from "./common/example/Example";
import Loading from "./common/loding";
import PrivateRoute from "./privateroute/PrivateRoute";
import Login from "./login/Login";
import MainLayout from "./common/MainLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.config/firebase.config";
import TopMenuBar from "./common/TopMenu/TopMenuBar";

const App = () => {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    document?.addEventListener("keyup", (e) => {
      if (
        e?.target?.localName === "input" &&
        e?.target?.attributes?.type?.value === "number"
      ) {
        if (e?.target?.value < 0 || e?.target?.value === "") {
          e.target.value = "";
          e?.stopPropagation();
          e?.preventDefault();
          return null;
        }
      }
    });
  }, []);
  if(loading){
    return <Loading />
  }
  if (!user) {
    return (
      <Routes>
        <Route path={"/"} element={<Login />} />
      </Routes>
    );
  }
  return (
    <div className="container-fluid m-0 p-0 ">
      {/* <TopMenuBar /> */}
      <MainLayout>
        <Routes>
          {routingList.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={
                <Suspense fallback={<Loading />}>
                  <PrivateRoute>{item.component}</PrivateRoute>
                </Suspense>
              }
            />
          ))}{" "}
          <Route path={"/example/:id/:type"} element={<Example />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
