import React from "react";
import Search from "../../common/search";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const NowShowing = (props) => {
  return (
    <React.Fragment>
      <h2 className="pt-2 page-heading"> Now Showing</h2>
      <div className="pb-3 mt-2 admin-appBar">
        <Search />
        <Button variant="contained">
          <AddIcon />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default NowShowing;
