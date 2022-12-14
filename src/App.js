import React, { Suspense, useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routingList } from "./routinglist";
import Example from "./common/example/Example";

const App = () => {
      // Checking negetive values on number input
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
  return (
    <div  className="container-fluid m-0 p-0 ">
      <Routes>
        {routingList.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={
              <Suspense fallback={<h1 style={{ color: "red" }}>Loading</h1>}>
                {item.component}
              </Suspense>
            }
          />
        ))}
        <Route path={"/example/:id/:type"} element={<Example />} />
      </Routes>
    </div>
  );
};

export default App;
