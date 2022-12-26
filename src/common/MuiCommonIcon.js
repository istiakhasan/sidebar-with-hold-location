import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import DeleteIcon from "@mui/icons-material/Delete";
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
    case "delete":
      return <DeleteIcon fontSize={size} sx={{ color: color,fontSize:"17px" }} />;

    default:
      break;
  }
};

export default MuiCommonIcon;
