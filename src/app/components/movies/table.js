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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const list = [
  {
    id: 1,
    firstName: "Jeanette",
    lastName: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    nhs: "825 852 5344",
    appointmentDate: "2022/10/15",
    status: "Confirmed",
  },
  {
    id: 2,
    firstName: "Giavani",
    lastName: "Frediani",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    nhs: "794 631 7832",
    appointmentDate: "2022/10/15",
    status: "Unconfirmed",
  },
  {
    id: 3,
    firstName: "Noell",
    lastName: "Bea",
    email: "nbea2@imageshack.us",
    gender: "Female",
    nhs: "412 491 1467",
    appointmentDate: "2022/10/15",
    status: "Confirmed",
  },
  {
    id: 4,
    firstName: "Willard",
    lastName: "Valek",
    email: "wvalek3@vk.com",
    gender: "Male",
    nhs: "857 532 2257",
    appointmentDate: "2022/10/15",
    status: "Cancelled",
  },
  {
    id: 5,
    firstName: "Willard",
    lastName: "Valek",
    email: "wvalek3@vk.com",
    gender: "Male",
    nhs: "353 217 0477",
    appointmentDate: "2022/10/15",
    status: "Confirmed",
  },
  {
    id: 6,
    firstName: "Willard",
    lastName: "Valek",
    email: "wvalek3@vk.com",
    gender: "Male",
    nhs: "2563 547 7674",
    appointmentDate: "2022/10/15",
    status: "Confirmed",
  },
];

const MoviesTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Calories</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell>Carbs</TableCell>
            <TableCell>Protein</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Row = (props) => {
  const { row, key } = props;
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={key}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.gender}</TableCell>
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
            <MenuItem key={1} onClick={handleClose}>
              <EditIcon color="primary" />
              &nbsp;Edit
            </MenuItem>
            <MenuItem key={2} onClick={handleClose}>
              <DeleteIcon color="danger" />
              &nbsp;Delete
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              I am Description
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default MoviesTable;
