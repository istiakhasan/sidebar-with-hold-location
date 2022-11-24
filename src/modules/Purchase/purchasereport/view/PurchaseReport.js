import { Switch, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import MainLayout from "../../../../common/MainLayout";

const PurchaseReport = () => {
  const tableheaders = [
    {
      id: "89",
      numeric: false,
      disablePadding: true,
      label: "SL",
      isActive: true,
    },
    {
      id: "calories",
      numeric: false,
      disablePadding: false,
      label: "Customer",
      isActive: true,
      showRow:true
    },
    {
      id: "76",
      numeric: true,
      disablePadding: false,
      label: "Invoice No",
      isActive: true,
    },
    {
      id: "16",
      numeric: true,
      disablePadding: false,
      label: "Challan No",
      isActive: true,
    },
    {
      id: "13",
      numeric: true,
      disablePadding: false,
      label: "Amount",
      isActive: true,
    },
  ];
  const [tableTh, setTableTh] = useState(tableheaders);
 
 const [tableData,setTAbleData]=useState([
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
  {id:1,customer:"xyx",invoice:"0211",challan:"0211",amount:"220",isActive:true},
 ])
 const handleChangeTable = (e, i) => {
  if (!e.target.checked) {
    const _data = [...tableTh];
    const _tableData=[...tableData]
    _data[i].isActive = false;
    setTableTh(_data);
  }else{
    const _data = [...tableTh];
    _data[i].isActive = true;
    setTableTh(_data);
  }
};
  return (
    <MainLayout>
      <CustomCommonTable tableheaders={tableTh} >
      {tableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                {item.isActive&&<TableCell>{item.customer}</TableCell>}
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
      <div className="d-flex flex-column">
        {tableheaders.map((item, i) => (
          <Switch
            defaultChecked
            key={item.id}
            onChange={(e) => handleChangeTable(e, i)}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default PurchaseReport;
