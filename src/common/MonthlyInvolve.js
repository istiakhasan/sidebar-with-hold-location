import { Paper, Typography } from "@mui/material";
import React from "react";

const MonthlyInvolve = ({ title, amount, url }) => {
  return (
    <Paper sx={{width:"90%"}} variant="outlined" >
      <div className="d-flex align-items-center  px-1">
        
        <img style={{height:"35px",width:"35px"}} className="img-fluid"  src={url} alt="" />
        <Typography className="ms-2" sx={{display:"flex",flexDirection:"column"}} component={"div"}>
          <Typography component={"small"} sx={{fontSize:"14px",color:"#475467",fontWeight:"400",fontStyle:"normal"}}>
            {title}
          </Typography>
          <Typography component={"strong"} sx={{fontSize:"13px",fontWeight:"600",color:"#344054"}}>৳{amount}</Typography>
        </Typography>
      </div>
    </Paper>
  );
};

export default MonthlyInvolve;
