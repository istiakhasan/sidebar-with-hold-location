import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonSubMenu from "../CommonSubMenu";
import MuiCommonIcon from "../MuiCommonIcon";

const TopMenuBar = () => {
  const { menuToggle } = useSelector((state) => state.CounterReducers);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <div 
      className="navbar navbar-wraper"
      
      >
        <span
          onClick={() => dispatch({ type: "TOGGLE_BAR" })}
          className="d-flex justify-content-between align-items-center d-inline-block h-100 ms-3"
        >
          {!menuToggle ? (
            <MuiCommonIcon name="menu" size="large" />
          ) : (
            <MuiCommonIcon name="cancel" size="large" />
          )}
        </span>
        <img
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "50%",
            marginRight: "50px",
            cursor: "pointer",
            border: "3px solid #66bfbf",
            padding: "2px",
          }}
          className="img-fluid"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU"
          alt=""
        />
      </div>
      <CommonSubMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};

export default TopMenuBar;
