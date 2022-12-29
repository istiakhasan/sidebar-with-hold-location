import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useState } from "react";
import Pagination from "react-custom-pagination";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import CustomPagination from "../../../../common/CustomPagination";
import MainLayout from "../../../../common/MainLayout";
import NewPagination from "../../../../common/NewPagination";

const PurchaseReturn = () => {
 




 
  

  



  return (
   
      <>
      <CustomCommonTable >
         {/* {
          newArray.map(item=>(
            <TableRow>
              <TableCell>{item.sl}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.Supplier}</TableCell>
              <TableCell>{item.invoice}</TableCell>
              <TableCell>{item.action}</TableCell>
            </TableRow>
          ))
         }      */}
        
      </CustomCommonTable>
     
      {/* <CustomPagination row={tableData} setNewArray={setNewArray} /> */}
        
        {/* <div style={{ width: "400px",marginLeft:"auto" }}>
          <Pagination
            totalPosts={tableData.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
            view={2}
            showLast={false}
            showFirst={false}
            showIndex={false}
            boxRadius={"5%"}
            boxWidth="40px"
           
            justify="center"
            marginRight="10px"
          />
        </div> */}
      </>
 
  );
};

export default PurchaseReturn;
