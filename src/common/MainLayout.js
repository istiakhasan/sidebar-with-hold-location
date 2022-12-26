import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
import TopMenuBar from "./TopMenu/TopMenuBar";

const MainLayout = ({ children }) => {
  const { menuToggle } = useSelector((state) => state.CounterReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        dispatch({ type: "TOGGLE_AUTO" });
      } else {
        dispatch({ type: "TOGGLE_CLOSE" });
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10vh",
        }}
      >
        <TopMenuBar />
      </div>
      <div style={{ display: "flex" }}>
        <div
          id="sidebar-wrapper"
          style={
            menuToggle
              ? {
                  width: "250px",
                  transition: "1s ease ",
                  left: "0%",
                  overflow: "hidden",
                  position: "absolute",
                  zIndex: 222,
                }
              : {
                  width: 0,
                  position: "absolute",
                  zIndex: -22,
                  transition: "1s ease ",
                  overflow: "hidden",
                }
          }
        >
          <Sidebar />
        </div>
        <div
          className="custom-scroll right-side"
          style={{
            flex: "1",
            padding: "20px",
     
            height: "auto",
      
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
