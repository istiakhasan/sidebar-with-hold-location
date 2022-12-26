import React from "react";
import { useRef } from "react";
import { TableCell, TableRow } from "@mui/material";

import CustomCommonTable from "../../../../common/CustomCommonTable";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
const PartnerListTable = ({ gridData }) => {
  const tableheaders = [
    {
      id: "89",
      numeric: true,
      disablePadding: true,
      label: "SL",
    },
    {
      id: "calories",
      numeric: true,
      disablePadding: false,
      label: "Partner Name",
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Phone No",
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Company",
    },
    {
      id: "13",
      numeric: true,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "11",
      numeric: true,
      disablePadding: false,
      label: "Partner Type",
    },
    {
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "Action",
      style: { textAlign: "center" },
    },
  ];

  const componentRef = useRef();

  const ref = React.createRef();

  return (
    <div className="table-responsive mt-2" ref={componentRef}>
      {/* <CommonPrintButton componentRef={componentRef} /> */}
      {/* <ReactToPdf 
   
        targetRef={ref}
        filename="div-blue.pdf"
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf> */}
      <div className="custom-scroll" style={{ height: "500px" }} ref={ref}>
        <CustomCommonTable tableheaders={tableheaders}>
          {gridData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item?.partnerType?.label}</TableCell>

              <TableCell sx={{ textAlign: "center" }}>
                <span >
                  <MuiCommonIcon name={"delete"} color="red" size="small" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </CustomCommonTable>
      </div>
    </div>
  );
};

export default PartnerListTable;
