import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import Col from "react-bootstrap/Col";
import Seats from "./seats";

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

  useEffect(() => {
    setSeats(createSeats(8, 1));
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
