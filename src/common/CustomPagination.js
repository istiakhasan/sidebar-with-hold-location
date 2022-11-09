import { Pagination, TablePagination } from '@mui/material';
import React, { useEffect } from 'react';

const CustomPagination = ({row,setNewArray}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  function paginateArray(arr, itemPerPage, pageIndex, setter) {
    const lastIndex = itemPerPage * pageIndex;
    const firstIndex = lastIndex - itemPerPage;
    const _data = arr.slice(firstIndex, lastIndex)
    console.log(_data,"_data")
    setter(_data)
  }
  useEffect(()=>{
  
    paginateArray(row, rowsPerPage, page+1, setNewArray);
  },[page,row,rowsPerPage,setNewArray])
  return (
    <>
    <TablePagination
  
    variant="outlined" shape="rounded"
    component="div"
    count={row.length}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />

  <Pagination  count={10} variant="outlined" shape="rounded" />
  </>
  );
};

export default CustomPagination;
