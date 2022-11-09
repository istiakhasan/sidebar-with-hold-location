import React, { useEffect, useState } from 'react';
import Pagination from "react-custom-pagination";

const NewPagination = ({tableData,setNewArray}) => {
    //table data is the main array 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  useEffect(()=>{
    setNewArray(currentPosts)
  },[currentPage,currentPosts,setNewArray])

    return (
        <div style={{ width: "400px",marginLeft:"auto" }}>
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
      </div>
    );
};

export default NewPagination;