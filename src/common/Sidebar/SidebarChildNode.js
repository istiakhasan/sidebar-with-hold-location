import React, { useEffect, useState } from "react";

import SecondLayer from "./SecondLayer";

const SidebarChildNode = ({ item: element, index, click, setClick, data }) => {
  const [secondClick, setSecondClick] = useState();
  useEffect(() => {
    const urlPath = window.location.pathname;
    const firstLayerTitle = urlPath.split("/")[1];

    const getSignleItem = data.find(
      (dt) => dt.title.toLowerCase() === firstLayerTitle
    );
    if (getSignleItem) {
      setClick(getSignleItem.id);
    }

    if (urlPath === element.path) {
      setClick(element.id);
    }
  }, []);
  const isMatch = localStorage.getItem("data");

  return (
    <ul className="parent-menu-item">
      <li
        onClick={() => {
          localStorage.setItem("data", element.title);
          if (click === element.id) {
            setClick(null);
          } else {
            setClick(element.id);
          }
        }}
        style={{ cursor: "pointer", whiteSpace: "nowrap" }}
      >
        <i className={element.icon}></i>
        <span
          className={`first-level-title ${
            isMatch === element.title && "ismatch"
          }`}
        >
          {element.title}
        </span>
      </li>

      <ul
        className={`parent-menu-item  ${
          click === element.id ? "show" : "hide"
        }`}
      >
        {element?.children?.map((child, i) => (
          <SecondLayer
            setSecondClick={setSecondClick}
            secondClick={secondClick}
            key={child.id}
            index={index}
            child={child}
            data={element?.children}
          />
        ))}
      </ul>
    </ul>
  );
};

export default SidebarChildNode;
