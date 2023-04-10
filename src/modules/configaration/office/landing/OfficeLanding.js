import { TableCell, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import Loading from "../../../../common/loding";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import auth from "../../../../firebase.config/firebase.config";
import useOffice from "../action/useOffice";

const OfficeLanding = ({data}) => {


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
      label: "Business Unit",
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Office Name",
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Office Address",
    },
    {
      id: "13",
      numeric: true,
      disablePadding: false,
      label: "Phone",
    },
    {
      id: "11",
      numeric: true,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "District",
      style: { textAlign: "center" },
    },
    {
      id: "113",
      numeric: true,
      disablePadding: false,
      label: "Action",
      style: { textAlign: "center" },
    },
  ];
  console.log(data, "data fetched");
  return (
    <div className="table-responsive mt-2">
      <div className="custom-scroll" style={{ maxHeight: "600px" }}>
        <CustomCommonTable tableheaders={tableheaders}>
          {data?.data?.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item?.branch?.label}</TableCell>
              <TableCell>{item?.label}</TableCell>
              <TableCell>{item?.address}</TableCell>
              <TableCell>{item?.phone}</TableCell>
              <TableCell>{item?.officeEmail}</TableCell>
              <TableCell>{item?.district || "Jamalpur"}</TableCell>

              <TableCell sx={{ textAlign: "center" }}>
                <span className="d-flex justify-content-center">
                  <span
                    className="me-2 d-inline-block"
                    onClick={() => {
                      // setViewShowModal(true);
                      //    setViewItem(true);
                      // setCurrentRowId(item._id);
                    }}
                  >
                    <MuiCommonIcon />
                  </span>
                  <span
                    className="me-2 d-inline-block"
                    onClick={() => {
                      //   setViewShowModal(true);
                      //   setCurrentRowId(item._id);
                    }}
                  >
                    <MuiCommonIcon name={"edit"} size="small" color={"green"} />
                  </span>
                  <span
                    className=""
                    onClick={() => {
                      //   ConfirmAlert({
                      //     yesFunction: () => handleDeletePartner(item._id),
                      //     title: "Confirm to submit",
                      //     message: "Are you sure to delete this partner ?",
                      //   });
                    }}
                  >
                    <MuiCommonIcon name={"delete"} color="red" size="small" />
                  </span>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </CustomCommonTable>
      </div>
    </div>
  );
};

export default OfficeLanding;
