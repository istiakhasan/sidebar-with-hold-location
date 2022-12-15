import { Button, TableCell, TablePagination, TableRow } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Pagination from "react-custom-pagination";
import { useReactToPrint } from "react-to-print";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import CustomPagination from "../../../../common/CustomPagination";
import ReactToPdf from "react-to-pdf";

import MainLayout from "../../../../common/MainLayout";
import CommonPrintButton from "../../../../common/CommonPrintButton";

const PurchasePayment = () => {
  const tableheaders = [
    {
      id: "89",
      numeric: false,
      disablePadding: true,
      label: "SL",
    },
    {
      id: "calories",
      numeric: false,
      disablePadding: false,
      label: "Customer",
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Invoice No",
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Challan No",
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
      label: "Sales By",
    },
    {
      id: "12",
      numeric: true,
      disablePadding: false,
      label: "Date",
    },
    {
      id: "10",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },
    {
      id: "9",
      numeric: true,
      disablePadding: false,
      label: "Action",
    },
  ];
  const rows = [];
  const [row, setRow] = useState([]);
  const [array, setNewArray] = useState([]);

  const generateTableData = () => {
    for (let i = 0; i < 100; i++) {
      const newObj = {
        id: i,
        customer: "Person!" + 6 + i,
        invoice: 32343,
        challan: 45454,
        amount: 54,
        sales: 5332,
        date: new Date().toDateString(),
        status: "Pending",
        action: "+",
        style: { color: "red" },
      };

      rows.push(newObj);
    }

    setRow(rows);
  };
  useEffect(() => {
    generateTableData();
  }, []);
  const componentRef = useRef();

  const ref = React.createRef();

  return (
    <>
      <div className="table-responsive" ref={componentRef}>
        <CommonPrintButton componentRef={componentRef} />
        <ReactToPdf
          targetRef={ref}
          filename="div-blue.pdf"
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
        <div ref={ref}>
          <CustomCommonTable tableheaders={tableheaders}>
            {array.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.invoice}</TableCell>
                <TableCell>{item.challan}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.sales}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.action}</TableCell>
              </TableRow>
            ))}
          </CustomCommonTable>
        </div>
        <CustomPagination row={row} setNewArray={setNewArray} />
      </div>
    </>
  );
};

export default PurchasePayment;
