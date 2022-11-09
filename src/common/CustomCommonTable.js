import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {props?.tableheaders.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={headCell.style}
            align={headCell.numeric ? "left" : "left"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function CustomCommonTable({ tableheaders, children }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%", padding: "18px" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ padding: "0 20px" }}>
          <Table
            sx={{ minWidth: 750, padding: "" }}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              tableheaders={tableheaders}
            />
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
