import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonSubMenu from "../CommonSubMenu";
import MuiCommonIcon from "../MuiCommonIcon";
import Select from "react-select";
import customStyles from "../customStyles";
import { useEffect } from "react";
import fetchBranches from "../../redux/thunk/fetchBranches";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config/firebase.config";
import actionType from "../../redux/actionTypes/actionTypes";
const TopMenuBar = () => {
  const { menuToggle } = useSelector((state) => state.CounterReducers);
  const [user] = useAuthState(auth);
  const { branch,selectedBranch } = useSelector((state) => state.authReducer);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    dispatch(fetchBranches(user?.email));
  }, [dispatch, user?.email]);
 
  return (
    <>
      <div className="navbar navbar-wraper">
        <span
          onClick={() => dispatch({ type: "TOGGLE_BAR" })}
          className="d-flex justify-content-between align-items-center d-inline-block h-100 ms-4 toggleIconWrapper"
        >
          {!menuToggle ? (
            <MuiCommonIcon name="menu" size="large" />
          ) : (
            <MuiCommonIcon name="cancel" size="large" />
          )}
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "170px", marginRight: "10px" }}>
            <Select
              value={selectedBranch}
              onChange={(valueOption) => {dispatch({type:actionType.SELECT_BRANCH,payload:valueOption})}}
              options={branch}
              className=" w-100"
              styles={customStyles}
            />
          </div>
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
              border: "2px solid white",
              padding: "4px",
            }}
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU"
            alt=""
          />
        </div>
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
