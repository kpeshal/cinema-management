import React, { useEffect, useState } from "react";
import * as seatService from "../../service/seatService";

const createSeats = (rows, startIndex) => {
  let i = 0;
  let j = startIndex;
  let k = "A";
  const section = [];
  while (i < 12 && j <= rows) {
    if (k > "L") {
      k = "A";
      j++;
    }
    if (j < rows + 1) {
      section.push(j + k);
      k = String.fromCharCode(k.charCodeAt(0) + 1);
    }
  }
  return section;
};

const TheatreOne = (props) => {
  // const [availableSeats, setAvailableSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seats, setSeats] = useState([]);

  const addSeat = (e) => {
    setBookedSeats([...bookedSeats, e.target.innerText]);
  };

  const fetchBookedSeats = () => {
    let query = {};
    query.movieId = 2;
    query.theatreName = "Theatre1";
    seatService
      .fetchAllSeatsByTheatreAndMovie(query)
      .then((result) => {
        if (result.status === "success" && result.data.length > 0) {
          let bookedSeats = result.data.map((x) => {
            return x.seatNo;
          });
          setBookedSeats(bookedSeats);
        }
      })
      .catch((error) => {
        console.log("Error fetching seats list", error);
      });
  };

  useEffect(() => {
    setSeats(createSeats(8, 1));
    fetchBookedSeats();
  }, []);

  return (
    <div className="p-5">
      <div className="screen-container">
        <div className="screen"></div>
        <div className="seat_section">
          {seats &&
            seats.map((x) => (
              <div
                className={
                  bookedSeats.includes(x) ? "th1-seat-or" : "th1-seat-gr"
                }
                onClick={addSeat}
              >
                {x}
              </div>
            ))}
        </div>

        {/* <div className="seat-row">
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
          <div className="th1-seat-gr"></div>
        </div> */}
      </div>
      <br />
    </div>
  );
};

export default TheatreOne;
