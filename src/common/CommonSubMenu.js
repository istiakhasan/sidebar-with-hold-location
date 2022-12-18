import * as React from "react";
import Menu from "@mui/material/Menu";
import MuiCommonIcon from "./MuiCommonIcon";
import {signOut} from 'firebase/auth'
import auth from '../firebase.config/firebase.config'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
export default function CommonSubMenu({ setAnchorEl, open, anchorEl }) {
  const [user]=useAuthState(auth)
  const handleClose = () => {
    setAnchorEl(null);
  };
 const navigate=useNavigate()
  return (
    <div>
      <Menu
        id="submenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          style={{
            minHeight: "100px",
            height: "auto",
            width: "200px",
            padding: "5px",
          }}
        >
          <p
            style={{ borderBottom: ".5px solid #CCD0D5",cursor:"pointer" }}
            className="mb-2 submenu-wrapper"
          >
            <img
              style={{
                width: "20px",
                height: "20px",
                objectFit: "cover",
                borderRadius: "50%",
                border:"1px solid #66bfbf",
                padding:"1px",
                cursor: "pointer",
              }}
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU"
              alt=""
            />
            <span className="profile-submenu">{user?.displayName?user?.displayName:"Unknown"}</span>
          </p>
          <p style={{cursor:"pointer"}} className="d-flex align-items-center mb-2 submenu-wrapper">
            <MuiCommonIcon size="small" name="settings" />{" "}
            <span className="profile-submenu">Settings and privecy</span>
          </p>
          <p style={{cursor:"pointer"}} className="d-flex align-items-center mb-2 submenu-wrapper">
            <MuiCommonIcon size="small" name="help" />{" "}
            <span className="profile-submenu">Help and support</span>
          </p>
          <p style={{cursor:"pointer"}} className="d-flex align-items-center mb-2 submenu-wrapper">
            <MuiCommonIcon size="small" name="feedback" />{" "}
            <span className="profile-submenu">Give feedback</span>
          </p>
          <p 
          style={{cursor:"pointer"}}
            onClick={() => {
              
              signOut(auth)
              .then(()=>navigate("/"))
            
            }}
            className="d-flex align-items-center mb-2 submenu-wrapper "
          >
            <MuiCommonIcon size="small" name="logout" />{" "}
            <span className="profile-submenu">Logout</span>
          </p>
        </div>
      </Menu>
    </div>
  );
}
