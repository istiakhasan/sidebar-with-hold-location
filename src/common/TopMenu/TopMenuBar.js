import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonSubMenu from "../CommonSubMenu";
import MuiCommonIcon from "../MuiCommonIcon";

const TopMenuBar = () => {
  const {menuToggle}=useSelector(state=>state.CounterReducers)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch=useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
    <div
      style={{
        width: "100%",
        height: "10vh",
        background: "#eaf6f6",
        borderBottom: "1px solid #66bfbf",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",

      }}
    >
      <span onClick={()=>dispatch({type:"TOGGLE_BAR"})} className="d-flex justify-content-between align-items-center d-inline-block h-100 ms-3">
       {menuToggle? <MuiCommonIcon name="menu" size="large" />:
        <MuiCommonIcon name="cancel" size="large" />}
       
      </span>
      <img 
    
       aria-controls={open ? 'basic-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
      
      style={{
          width:"40px",
          height:"40px",
          objectFit:"cover",
          borderRadius:"50%",
          marginRight:"50px",
          cursor:"pointer"

         }} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU" alt="" />



    
       
      
    </div>
    <CommonSubMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl}  />
   </>
  );
};

export default TopMenuBar;
