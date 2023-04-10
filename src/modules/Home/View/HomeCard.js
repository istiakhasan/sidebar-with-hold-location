import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Home.style.css'
const HomeCard = ({title,percentage,total,icon}) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 ">
        <div  className="d-flex justify-content-between   dashboard-card">
          <div className='d-flex justify-content-center flex-column'>
            {icon}
            <p className='text-secondary'>{title}</p>
            <p style={{fontSize:"22px"}} className="d-flex align-items-center gap-3">
              <span>
                <KeyboardArrowUpIcon sx={{fontSize:"30px",color:"#176E6D"}} />
              </span>{" "}
              <strong  >{percentage}</strong> <span>%</span>
            </p>
          </div>

          <p className="h-auto d-flex  align-items-end">
            <span
              style={{
                border: "4px solid #176E6D",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              58
            </span>
          </p>
        </div>
      </div>
    );
};

export default HomeCard;