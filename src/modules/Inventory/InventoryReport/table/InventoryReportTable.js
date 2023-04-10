import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useState } from "react";
import stockTable from "./stocktable.module.css";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
const InventoryReportTable = () => {
  // const [gridData, setGridData] = useState([]);
  const {
    data: gridData,
    isLoading,
    error,
  } = useQuery(["stock"], () =>
    fetch("http://localhost:8080/api/v1/stock").then((res) => res.json())
  );
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/stock")
  //     .then((res) => res.json())
  //     .then((data) => setGridData(data));
  // }, []);
  if (isLoading) {
    return;
  }
  return (
    <div className={`${stockTable.tablewraper} custom-scroll`}>
      <table className={stockTable.stock_table}>
        <thead>
          <tr className={stockTable.red}>
            <th className="">1</th>
            <th className="">Item Category</th>
            <th className="">Item Name</th>
            <th className="">Item Type</th>
            <th className="text-center">Stock</th>
            <th style={{ paddingRight: "20px" }} className="text-end ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {gridData.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v?.itemCategory?.label ? v?.itemCategory?.label : "--"}</td>
              <td>{v?.itemName ? v?.itemName : "--"}</td>
              <td>{v?.itemType?.label ? v?.itemType?.label : "--"}</td>
              <td className="text-center">
                {v?.purchase_quantity ? v?.purchase_quantity : "--"}
              </td>
              <td style={{ paddingRight: "20px" }} className="text-end">
                <MuiCommonIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryReportTable;
