import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CancelIcon from "@mui/icons-material/Cancel";

const UserTable = (props) => {
  const { list, editMovie } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <Row key={row.userId} row={row} handleEdit={editMovie} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Row = (props) => {
  const { row, key, handleEdit } = props;
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCancel = (data) => {};

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={key}>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.role}</TableCell>
        <TableCell>
          <IconButton aria-label="Example" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "20ch",
              },
            }}
          >
            <MenuItem key={2} onClick={() => handleCancel(row)}>
              <CancelIcon color="danger" />
              &nbsp;Cancel Booking
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default UserTable;
