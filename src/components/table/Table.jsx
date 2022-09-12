import React from 'react'
import "./table.scss";
import img_0 from "../../images/0.png";
import img_1 from "../../images/1.png";
import img_2 from "../../images/2.png";
import img_3 from "../../images/3.png";
import img_4 from "../../images/4.png";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id, product, img, customer, date, amount, method, status) {
  return { id, product, img, customer, date, amount, method, status };
}

const rows = [
    createData(256263, "MX-60X Power Turbine", img_0,
        "Swissco Construction Plans", "23 Feb", 22500, "Online",  "Pending"),
    createData(574572, "Construction Truck", img_1,
        "Swissco Construction Plans", "27 Jan", 30500, "Online",  "Approved"),
    createData(568568, "Construction Vehicle", img_2,
        "Swissco Construction Plans", "16 Apr", 35000, "Online",  "Pending"),
    createData(345345, "Vehicle", img_3,
        "Swissco Construction Plans", "7 May", 18000, "Online",  "Approved"),
    createData(268489, "Tools", img_4,
        "Swissco Construction Plans", "21 Jun", 2600, "Online",  "Pending"),
];

const SimpleTable = () => {
  return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell" align="left">ID</TableCell>
                    <TableCell className="tableCell" align="left">Product</TableCell>
                    <TableCell className="tableCell" align="right">Customer</TableCell>
                    <TableCell className="tableCell" align="right">Date</TableCell>
                    <TableCell className="tableCell" align="right">Cost&nbsp;(USD);</TableCell>
                    <TableCell className="tableCell" align="right">Payment Method;</TableCell>
                    <TableCell className="tableCell" align="right">Balance</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell className="tableCell" component="th" scope="row">{row.id}</TableCell>
                    <TableCell className="tableCell" align="right">
                        <div className="wrapper">
                             <img className="image" src={row.img}  alt="" />
                             {row.product}
                        </div>
                    </TableCell>
                    <TableCell className="tableCell" align="right">{row.customer}</TableCell>
                    <TableCell className="tableCell" align="right">{row.date}</TableCell>
                    <TableCell className="tableCell" align="right">{row.amount}</TableCell>
                    <TableCell className="tableCell" align="right">{row.method}</TableCell>
                    <TableCell className="tableCell" align="right">
                        <span className= {`status ${row.status}`}>{row.status}</span>
                    </TableCell>
                    </TableRow>
                ))}  
                </TableBody>
            </Table>
        </TableContainer>
  )
}

export default SimpleTable