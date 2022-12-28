import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from '@mui/icons-material/BorderColor';
const MuiCommonIcon = ({ name, size, color }) => {
  switch (name) {
    case "menu":
      return <MenuIcon fontSize={size} sx={{ color: color }} />;
    case "cancel":
      return <ClearIcon fontSize={size} sx={{ color: color }} />;
    case "logout":
      return <LogoutIcon fontSize={size} sx={{ color: color }} />;
    case "help":
      return <HelpIcon fontSize={size} sx={{ color: color }} />;
    case "settings":
      return <SettingsIcon fontSize={size} sx={{ color: color }} />;
    case "feedback":
      return <FeedbackIcon fontSize={size} sx={{ color: color }} />;
    case "edit":
      return <BorderColorIcon fontSize={size} sx={{ color: color,fontSize:"17px" }} />;
    case "delete":
      return (
        <DeleteIcon fontSize={size} sx={{ color: color, fontSize: "17px" }} />
      );

    default:
      return (
        <VisibilityIcon
          fontSize={size}
          sx={{ color: color, fontSize: "17px" }}
        />
      );
  }
};

export default MuiCommonIcon;
