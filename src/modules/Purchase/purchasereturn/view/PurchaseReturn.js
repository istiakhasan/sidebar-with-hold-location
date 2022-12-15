import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useState } from "react";
import Pagination from "react-custom-pagination";
import CustomCommonTable from "../../../../common/CustomCommonTable";
import CustomPagination from "../../../../common/CustomPagination";
import MainLayout from "../../../../common/MainLayout";
import NewPagination from "../../../../common/NewPagination";

const PurchaseReturn = () => {
  const [tableData,setTableDAta]=useState(()=>{
    let newArray=[]
    for(let i=0;i<100;i++){
      let obj={
        sl:i,
        customerName:`Rohoman ${i}`,
        Supplier:`Rohoman SP ${i}`,
        invoice:2345+i,
        action:"+"

      }
      newArray.push(obj)
    }

    return newArray
  })
  const posts = [
  {id:1,label:"sl"},
  {id:2,label:"Customer Name"},
  {id:3,label:"Supplier"},
  {id:4,label:"Invoice"},
  {id:5,label:"Action"},
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };


  
  const [newArray,setNewArray]=useState([])
  console.log(tableData,"table data")
  return (
   
      <>
      <CustomCommonTable tableheaders={posts}>
         {
          newArray.map(item=>(
            <TableRow>
              <TableCell>{item.sl}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.Supplier}</TableCell>
              <TableCell>{item.invoice}</TableCell>
              <TableCell>{item.action}</TableCell>
            </TableRow>
          ))
         }     
        
      </CustomCommonTable>
      <NewPagination tableData={tableData}  setNewArray={setNewArray}/>
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
