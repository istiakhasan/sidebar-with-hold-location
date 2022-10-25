import React, { useEffect, useState } from "react";

import SecondLayer from "./SecondLayer";

const SidebarChildNode = ({ item: element, index, click, setClick, data }) => {
  const [active,setActive]=useState(false)
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
  const isMatch=localStorage.getItem("data")

  return (
    <div>
      <ul className="parent-menu-item">
        <li
          onClick={() => {
            localStorage.setItem("data",element.title)
            if (click === element.id) {
              setClick(null);
            } else {
              setClick(element.id);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <i className={element.icon}></i>
          <span className={`first-level-title ${isMatch===element.title&&"ismatch"}`}>

          {element.title}
          </span>
        </li>
        {click === element.id && (
          <ul className="parent-menu-item">
            {element?.children?.map((child, i) => (
              <SecondLayer key={child.id} child={child} />
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default SidebarChildNode;
