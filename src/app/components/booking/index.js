import React, { useEffect, useState } from "react";
import Search from "../../common/search";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TheatreOne from "./theatre";
import MovieCard from "../../common/movieCard";
import * as movieService from "../../service/movieService";
import BookingModal from "./bookingModal";

const NowShowing = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [mySeats, setMySeats] = useState([]);

  const myBookingsHandler = (x) => {
    let a = mySeats;
    if (a.includes(x)) {
      a = a.filter((b) => b !== x);
    } else {
      a.push(x);
    }
    setMySeats(a);
  };

  const saveHandler = () => {
    setMySeats([]);
  };

  const handleModelClick = () => {
    if (mySeats && mySeats.length > 0) {
      setShowModal(true);
    } else {
      alert("Please Select Seats Before Booking Confirmation");
    }
  };
  const handleCloseModal = () => {
    setMySeats([]);
    setShowModal(false);
  };

  const getMovies = () => {
    movieService
      .fetchAllMovies()
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          setMovieList(result.data);
        } else {
          setMovieList([]);
        }
      })
      .catch((error) => {
        console.log("Error fetching movie list", error);
      });
  };

  const onMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const onBackClick = () => {
    setSelectedMovie(undefined);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <React.Fragment>
      <h2 className="pt-2 page-heading"> Now Showing </h2>
      <div className="pb-3 mt-2 admin-appBar">
        {selectedMovie ? (
          <Button variant="contained" onClick={onBackClick}>
            <KeyboardBackspaceIcon />
          </Button>
        ) : (
          <Search />
        )}
        <Button variant="contained" onClick={handleModelClick}>
          Confirm Booking
        </Button>
      </div>
      {selectedMovie ? (
        <TheatreOne
          updateMyBookings={myBookingsHandler}
          mySeats={mySeats}
          movieId={selectedMovie.id}
        />
      ) : (
        <div className="p-3 card_wrapper">
          {movieList.map((x) => (
            <MovieCard key={x.movieId} movie={x} movieClick={onMovieClick} />
          ))}
        </div>
      )}

      {showModal && (
        <BookingModal
          show={showModal}
          seats={mySeats}
          handleClose={handleCloseModal}
          movie={selectedMovie}
          handleSave={saveHandler}
        />
      )}
    </React.Fragment>
  );
};

export default NowShowing;
