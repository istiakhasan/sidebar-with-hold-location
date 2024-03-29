import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "absolute", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Loading() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    // <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
    //     <CircularProgressWithLabel value={progress} />
    // </div>
    <div  style={{height:"100vh",width:"100%",overflow:"hidden"}}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "300px" }}>
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton height={"60px"} sx={{ marginLeft: "20px" }} />
          <Skeleton
            height={"60px"}
            sx={{ marginLeft: "20px" }}
            animation="wave"
          />
          <Skeleton
            height={"60px"}
            sx={{ marginLeft: "20px" }}
            animation={false}
          />
        </div>
        <hr
          style={{
            height: "100vh",
            width: "3px",
            background: "#E3E3E3",
            margin: "0 20px",
          }}
        />
        <div style={{ flex: "1" }}>
          <Skeleton height={200} sx={{ marginTop: "0" }} />
          <Skeleton sx={{width:"100%"}} />
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>
          <small>
            <Skeleton />
          </small>





        </div>
      </div>
    </div>
  );
}
