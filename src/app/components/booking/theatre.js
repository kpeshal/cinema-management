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
  const [blockedSeat, setBlockedSeat] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(["1C"]);
  const [seats, setSeats] = useState([]);

  const addSeat = (e) => {
    setBookedSeats([...bookedSeats, e.target.innerText]);
    computeAvailableSeat();
  };

  const getSeatCSS = (x) => {
    if (bookedSeats.includes(x)) return "th1-seat-or";
    if (blockedSeat.includes(x)) return "th1-seat-restricted";
    return "th1-seat-gr";
  };

  const computeAvailableSeat = () => {
    let noOfBlockedSeat = [];
    if (bookedSeats.length > 0 && bookedSeats.length < 48) {
      let uncensoredSeats = [];
      bookedSeats.map((seatNo) => {
        return new Promise((resolve, reject) => {
          let rowNo = seatNo.charAt(0);
          let columnNo = seatNo.charAt(1);
          uncensoredSeats.push(
            rowNo + String.fromCharCode(columnNo.charCodeAt() + 1)
          );
          uncensoredSeats.push(
            rowNo + String.fromCharCode(columnNo.charCodeAt() - 1)
          );
          uncensoredSeats.push(rowNo + "A");
          uncensoredSeats.push(rowNo + "L");
          resolve();
        });
      });
      let totalUncensoredSeats = Array.from(new Set(uncensoredSeats));

      let totalAvailableSeatToBook = seats.filter(
        (x) => !bookedSeats.includes(x)
      );
      noOfBlockedSeat = totalAvailableSeatToBook.filter(
        (x) => !totalUncensoredSeats.includes(x)
      );

      let rowsWithSeatBooked = bookedSeats.map(([v]) => v);

      noOfBlockedSeat = noOfBlockedSeat.filter((x) =>
        rowsWithSeatBooked.includes(x.charAt(0))
      );
    }
    setBlockedSeat(noOfBlockedSeat);
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
      .finally(() => {
        computeAvailableSeat();
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
              <div className={getSeatCSS(x)} onClick={addSeat}>
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
