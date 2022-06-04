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

const MoviesTable = (props) => {
  const { list } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Duration(Mins)</TableCell>
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
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.genre}</TableCell>
        <TableCell>{row.language}</TableCell>
        <TableCell>{row.duration}</TableCell>
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
              <em className="bold">Cast</em> &nbsp; <em>{row.cast}</em> <br />
              <em className="bold">Director</em> &nbsp; <em>{row.director}</em>{" "}
              <br />
              <em>{row.description}</em>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default MoviesTable;
