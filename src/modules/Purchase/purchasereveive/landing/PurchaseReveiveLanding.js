import { TableCell, TableRow } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import CustomModal from "../../../../common/CustomModal";
import JsButton from "../../../../common/JsButton";
import auth from "../../../../firebase.config/firebase.config";
import PurchaseReceiveForm from "../form/PurchaseReceiveForm";
import { getPurchaseOrderReveiveLanding } from "../utils/purchasereceiveutils";

const PurchaseReveiveLanding = () => {
  const [user, loading] = useAuthState(auth);
  const [gridData, setGridData] = useState([]);
  const { selectedBranch } = useSelector((state) => state.authReducer);
  const saveRef = useRef();
  const [show, setShow] = useState(false);
  const [rowDto, setRowDto] = useState({});
  const [currentRowId,setCurrentRowId]=useState('')
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
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "Action",
      style: {
        textAlign: "end",
        paddingRight: "20px !important",
        width: "50px",
      },
    },
  ];


  useEffect(() => {
    getPurchaseOrderReveiveLanding(user?.email,selectedBranch?.value,setGridData);
  }, [selectedBranch?.value,user.email]);

  return (
    <div className="table-responsive mt-2">
      <div className="custom-scroll" style={{ maxHeight: "600px" }}>
        <CustomCommonTable tableheaders={tableheaders}>
          {gridData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                {moment(item?.createdAt).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell>{item?.supplier?.label || ""}</TableCell>
              <TableCell>{user?.displayName || ""}</TableCell>
              <TableCell>{item?.totalPrice || ""}(Tk)</TableCell>

              <TableCell sx={{ textAlign: "end", width: "50px" }}>
                <JsButton
                  onClick={() => {
                    setRowDto(item);
                    setShow(true);
                    setCurrentRowId(item?._id)

                  }}
                  sx={{ marginRight: "10px" }}
                >
                  Receive
                </JsButton>
              </TableCell>
            </TableRow>
          ))}
        </CustomCommonTable>
      </div>

      {show && (
        <CustomModal
          setShow={setShow}
          title={"Receive from purchase order "}
          show={show}
          saveRef={saveRef}
          isView={true}
        >
          <PurchaseReceiveForm user={user} currentRowId={currentRowId} setGridData={setGridData} selectedBranch={selectedBranch}  rowDto={rowDto} setRowDto={setRowDto} saveRef={saveRef} />
        </CustomModal>
      )}
    </div>
  );
};

export default PurchaseReveiveLanding;
