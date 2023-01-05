import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const SecondLayer = ({ child, index, secondClick, setSecondClick, data }) => {
  // const [click, setClick] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const urlPath = window.location.pathname;
    // const firstLayerTitle = urlPath.split("/")[1];

    const getSignleItem = data.find((dt) => dt.title.toLowerCase() === urlPath);
    if (getSignleItem) {
      setSecondClick(getSignleItem.id);
    }

    if (urlPath === child.path) {
      setSecondClick(child.id);
    }
  }, []);

  return (
    <div
      onClick={() => {
        setSecondClick(child?.id);
      }}
      style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}
      className={`${secondClick === child?.id ? "ismatch" : ""}`}
    >
      <i
        style={{ fontSize: "6px", marginRight: "12px" }}
        className="fa-solid fa-circle"
      ></i>
      <Link
        className={`${secondClick === child?.id ? "ismatch" : ""}`}
        to={child?.path}
        onClick={() => {
          if (window.innerWidth < 700) {
            dispatch({ type: "TOGGLE_AUTO" });
          }
        }}
      >
        {child.title}
      </Link>{" "}
      <br />
    </div>
  );
};

export default SecondLayer;
