import React from "react";
import Search from "../../common/search";
import MoviesTable from "./table";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Movies = (props) => {
  return (
    <div>
      <h2 className="pt-2 page-heading"> Movies</h2>
      <div className="pb-3 mt-2 admin-appBar">
        <Search />
        <Button variant="contained">
          <AddIcon />
        </Button>
      </div>
      <MoviesTable />
    </div>
  );
};

export default Movies;
