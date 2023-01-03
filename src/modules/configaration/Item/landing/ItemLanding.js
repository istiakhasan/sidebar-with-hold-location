import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import auth from "../../../../firebase.config/firebase.config";

const ItemLanding = () => {
  const [user] = useAuthState(auth);
  const [gridData, setGridData] = useState([]);
  const { selectedBranch } = useSelector((state) => state.authReducer);
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/product/?email=${user?.email}&branchId=${selectedBranch?.value}`
    )
      .then((res) => res.json())
      .then((data) => setGridData(data?.data));
  }, [selectedBranch, user?.email]);
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
      label: "Item",
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Code",
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Barcode",
    },
    {
      id: "13",
      numeric: true,
      disablePadding: false,
      label: "Price",
    },
    {
      id: "11",
      numeric: true,
      disablePadding: false,
      label: "UoM",
    },
    {
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "Type",
      style: { textAlign: "center" },
    },
    {
      id: "113",
      numeric: true,
      disablePadding: false,
      label: "Category",
      style: { textAlign: "center" },
    },
    {
      id: "1131",
      numeric: true,
      disablePadding: false,
      label: "Status",
      style: { textAlign: "center" },
    },
    {
      id: "11311",
      numeric: true,
      disablePadding: false,
      label: "Action",
      style: { textAlign: "center" },
    },
  ];
  return (
    <div className="table-responsive mt-2">
      <div className="custom-scroll" style={{ maxHeight: "600px" }}>
        <CustomCommonTable tableheaders={tableheaders}>
          {gridData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item?.itemName || ""}</TableCell>
              <TableCell>{item?.itemCode || ""}</TableCell>
              <TableCell>{item?.barCode || ""}</TableCell>
              <TableCell>{item?.sellingPrice || ""}</TableCell>
              <TableCell>{item?.uom?.label || ""}</TableCell>
              <TableCell>{item?.itemType?.label || ""}</TableCell>
              <TableCell>{item?.itemCategory?.label || ""}</TableCell>
              <TableCell>{item?.status || "active"}</TableCell>

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

export default ItemLanding;
