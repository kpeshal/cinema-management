import React, { useState } from "react";
import Search from "../../common/search";
import MoviesTable from "./table";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MovieModal from "./movieModal";

const Movies = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState({});

  const handleAddMovie = () => {
    console.log("Add Clicked");
    setMovie({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setMovie({});
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <h2 className="pt-2 page-heading"> Movies</h2>
      <div className="pb-3 mt-2 admin-appBar">
        <Search />
        <Button variant="contained" onClick={handleAddMovie}>
          <AddIcon />
        </Button>
      </div>
      <MoviesTable />
      <MovieModal
        show={showModal}
        handleClose={handleCloseModal}
        // modalHeading="Edit Appointment"
        movie={movie}
      />
    </React.Fragment>
  );
};

export default Movies;
