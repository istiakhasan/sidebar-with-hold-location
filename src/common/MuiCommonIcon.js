import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
const MuiCommonIcon = ({name,size,color}) => {
   switch (name) {
    case "menu":
        
       return <MenuIcon fontSize={size} sw={{color:color}}/>
    case "cancel":
        
       return <ClearIcon fontSize={size} sw={{color:color}}/>
    case "logout":
        
       return <LogoutIcon fontSize={size} sw={{color:color}}/>
    case "help":
        
       return <HelpIcon fontSize={size} sw={{color:color}}/>
    case "settings":
        
       return <SettingsIcon fontSize={size} sw={{color:color}}/>
    case "feedback":
        
       return <FeedbackIcon fontSize={size} sw={{color:color}}/>
   
    default:
        break;
   }
};

export default MuiCommonIcon;