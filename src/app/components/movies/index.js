import React, { useState, useEffect } from "react";
import Search from "../../common/search";
import MoviesTable from "./table";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MovieModal from "./movieModal";

import * as movieService from "../../service/movieService";

const Movies = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({ loading: false, movieList: [] });
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    setState({ ...state, loading: true, movieList: [] });
    movieService
      .fetchAllMovies()
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          setState({
            ...state,
            movieList: result.data,
            loading: false,
          });
        } else {
          this.setState({ ...state, loading: false });
        }
      })
      .catch((error) => {
        console.log("Error fetching movie list", error);
        this.setState({ loading: false });
      });
  };

  const saveHandler = (data) => {
    let updatedList = [];

    if (state.movieList.find((x) => x.id === data.id)) {
      let previousList = [...state.movieList];
      updatedList = previousList.map((x) =>
        x.id === data.id ? Object.assign({}, data) : x
      );
    } else {
      updatedList = [data, ...state.movieList];
    }
    setState({ ...state, movieList: updatedList });
    handleCloseModal();
  };

  const handleAddMovie = () => {
    setMovie({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setMovie({});
    setShowModal(false);
  };

  const handleEditMovie = (data) => {
    setMovie(data);
    setShowModal(true);
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
      <MoviesTable list={state.movieList} editMovie={handleEditMovie} />
      {showModal && (
        <MovieModal
          show={showModal}
          handleClose={handleCloseModal}
          movie={movie}
          saveHandler={saveHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Movies;
