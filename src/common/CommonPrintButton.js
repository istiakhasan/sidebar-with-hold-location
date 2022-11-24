import { Button } from "@mui/material";
import React from "react";
import { useReactToPrint } from "react-to-print";

const CommonPrintButton = ({ componentRef }) => {
  // const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Button
      onClick={handlePrint}
      sx={{
        marginLeft: "auto",
        display: "block",
        marginRight: "20px",
        marginTop: "20px",
      }}
      variant="contained"
      color="success"
    >
      Print
    </Button>
  );
};

export default CommonPrintButton;
