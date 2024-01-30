import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useState } from "react";
import stockTable from "./stocktable.module.css";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import { useSelector } from "react-redux";
import { baseUrs } from "../../../../helpers/config/config.Env";
const InventoryReportTable = () => {
  const [user] = useAuthState(auth);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const {
    data: gridData,
    isLoading,
    error,
  } = useQuery(
    ["inventory_report", selectedBranch?.value],
    async () => {
      const res = await fetch(
        `${baseUrs()}/stock?email=${user.email}&branchId=${selectedBranch?.value || ''}`
      );

      return  res.json();
    }
  );
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
                {v?.quantity ? v?.quantity : "--"}
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
