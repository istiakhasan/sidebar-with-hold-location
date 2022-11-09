import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CustomModal from "../../../../common/CustomModal";
import MainLayout from "../../../../common/MainLayout";

const PurchaseReveive = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = React.useState(false);
  const sideData = [
    { id: 1, title: "All", name: "Purchase" },
    { id: 2, title: "Today", name: "Purchase" },
    { id: 3, title: "Todo", name: "Purchase" },
    { id: 4, title: "Previous day", name: "Purchase" },
    { id: 5, title: "Last Year", name: "Purchase" },
    { id: 6, title: "Next Year", name: "Purchase" },
  ];

  const handleClick = (item) => {
    const exist = data.find((itm) => itm.id === item.id);
    console.log(exist, "exist");
    if (!exist) {
      setData([...data, item]);
    } else {
      const remaining = data.filter((dt) => dt.id !== item.id);
      setData(remaining);
    }
  };

  // genarate table data 
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <MainLayout>
      <CustomModal setShow={setShow} show={show}>
        
      <TableContainer sx={{marginTop:"10px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              hover
              style={{cursor:"pointer"}}
              sx={{ '&:last-child td, &:last-child th': { border: 0,cursor:"pointer" } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </CustomModal>
      <div className=" row   mt-5 ">
        <div className="col-md-3  ">
          {sideData.map((item) => (
            <button
              onClick={() => handleClick(item)}
              style={{ width: "100% " }}
              className={`btn mb-2  btn-info btn-sm ${
                data.filter((dt) => dt.id === item.id).length > 0 && "bg-danger"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="col-md-9  ">
          <div className=" row ">
            {data?.map((v) => (
              <div style={{ height: "200px" }} className="col-md-6 ">
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "5px 8px",
                    borderRadius: "8px",
                    height: "98%",
                  }}
                >
                  <button
                    onClick={() => setShow(true)}
                    className="btn btn-secondary btn-sm"
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PurchaseReveive;
