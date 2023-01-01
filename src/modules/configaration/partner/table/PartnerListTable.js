import React from "react";
import { useRef } from "react";
import { TableCell, TableRow } from "@mui/material";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import usePartner from "../action/usePartner";
import "react-confirm-alert/src/react-confirm-alert.css";
import ConfirmAlert from "../../../../common/ConfirmAlert";
import { useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import PartnerForm from "../form/PartnerForm";
const PartnerListTable = ({ gridData, refetch }) => {
  const { handleDeletePartner } = usePartner(refetch);
  const [viewShowModal, setViewShowModal] = useState(false);
  const [viewItem, setViewItem] = useState(false);
  const [currentRowId, setCurrentRowId] = useState("");
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
  const saveRef = useRef();

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
      {/* <ConfirmAlert /> */}
      <div className="custom-scroll" style={{maxHeight:"600px"}}  ref={ref}>
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
               <span className="d-flex justify-content-center">
               <span
                  className="me-2 d-inline-block"
                  onClick={() => {
                    // setViewShowModal(true);
                     setViewItem(true);
                    // setCurrentRowId(item._id);
                  }}
                >
                  <MuiCommonIcon />
                </span>
                <span
                  className="me-2 d-inline-block"
                  onClick={() => {
                    setViewShowModal(true);
                 
                    setCurrentRowId(item._id);
                  }}
                >
                  <MuiCommonIcon name={"edit"} size="small" color={"green"} />
                </span>
                <span
                  className=""
                  onClick={() => {
                    ConfirmAlert({
                      yesFunction: () => handleDeletePartner(item._id),
                      title: "Confirm to submit",
                      message: "Are you sure to delete this partner ?",
                    });
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
      <CustomModal
        setShow={setViewShowModal}
        title={"Edit Partner"}
        show={viewShowModal}
        saveRef={saveRef}
        currentRowId={currentRowId}
      >
        <PartnerForm
         
          saveRef={saveRef}
          setShow={setViewShowModal}
          currentRowId={currentRowId}
          refetch={refetch}
        />
      </CustomModal>
      <CustomModal
        setShow={setViewItem}
        title={"View"}
        show={viewItem}
        saveRef={saveRef}
        currentRowId={currentRowId}
        isView={true}
      >
        <PartnerForm
          
          saveRef={saveRef}
          setShow={setViewShowModal}
          currentRowId={currentRowId}
          refetch={refetch}
          isView={true}
        />
      </CustomModal>
    </div>
  );
};

export default PartnerListTable;
