/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CustomCommonTable from "./../../../../common/CustomCommonTable";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import MuiCommonIcon from "./../../../../common/MuiCommonIcon";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../../firebase.config/firebase.config";
import Loading from "./../../../../common/loding";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { baseUrs } from "../../../../helpers/config/config.Env";
const PoApproveLanding = () => {
  const [user, loading] = useAuthState(auth);
  const [gridData, setGridData] = useState([]);
  const { selectedBranch } = useSelector((state) => state.authReducer);
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
      label: "PO Date",
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Supplier",
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Order By",
    },
    {
      id: "13",
      numeric: true,
      disablePadding: false,
      label: "Amount",
    },
    {
      id: "11",
      numeric: true,
      disablePadding: false,
      label: "Status",
      style:{textAlign:"end"}
    },
    {
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "Action",
      style: { textAlign: "end" },
    },
  ];

  const getPurchaseOrderLanding = () => {
    fetch(
      `${baseUrs()}/purchase?email=${user?.email}&branchId=${selectedBranch?.value}&status=pending`
    )
      .then((res) => res.json())
      .then((data) => setGridData(data?.data));
  };
  useEffect(() => {
    getPurchaseOrderLanding();
  }, [selectedBranch?.value, user?.email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="table-responsive mt-2">
      <div className="custom-scroll" style={{ maxHeight: "600px" }}>
        <CustomCommonTable tableheaders={tableheaders}>
          {gridData?.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                {moment(item?.createdAt).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell>{item?.supplier?.label || ""}</TableCell>
              <TableCell>{user?.displayName || ""}</TableCell>
              <TableCell>{item?.totalPrice || ""}(Tk)</TableCell>
              <TableCell sx={{ textAlign: "end",maxWidth:"40px" }}>
                {item?.status === "approved" ? (
                  <span
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      fontSize: "11px",
                    }}
                  >
                    {item?.status}
                  </span>
                ) : (
                  <span
                    style={{
                      color: "goldenrod",
                      fontWeight: "bold",
                      fontSize: "11px",
                    }}
                    onClick={() => {
                
                      fetch(
                        `${baseUrs()}/purchase/${item?._id}?email=${user?.email}&branchId=${selectedBranch?.value}&status=pending`,
                        {
                          method: "PATCH",
                        }
                      )
                        .then((res) => res.json())
                        .then((data) => {
                          toast.success("Approved successfully...")
                          getPurchaseOrderLanding();
                        });
                    }}
                  >
                    {item?.status}
                  </span>
                )}
              </TableCell>

              <TableCell sx={{ textAlign: "end",maxWidth:"40px" }}>
                <span className="">
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

export default PoApproveLanding;
