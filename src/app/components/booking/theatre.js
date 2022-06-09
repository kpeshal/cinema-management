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
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  // const [mySeats, setMySeats] = useState([]);

  const addSeat = (e) => {
    e.preventDefault();
    let seat = e.target.innerText;
    if (bookedSeats.includes(seat)) {
      setBookedSeats(bookedSeats.filter((x) => x !== seat));
    } else {
      setBookedSeats([...bookedSeats, seat]);
    }
    computeAvailableSeat();
    props.updateMyBookings(seat);
  };

  const getSeatCSS = (x) => {
    if (props.mySeats.includes(x)) return "th1-seat-bl";
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
    setBookedSeats([]);
    let query = {};
    query.movieId = props.movieId;
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

  useEffect(() => {
    computeAvailableSeat();
  }, [bookedSeats]);

  return (
    <div className="pl-5 pr-5">
      <div className="d-flex justify-content-between">
        <div>
          <div className="th1-seat-gr" />
          Available{" "}
        </div>
        <div>
          <div className="th1-seat-or" />
          Booked{" "}
        </div>

        <div>
          <div className="th1-seat-restricted" />
          Reserved{" "}
        </div>
        <div>
          <div className="th1-seat-bl" />
          My Selections{" "}
        </div>
        {/* <div>Seats Selected - {props.mySeats.join(", ")}</div> */}
      </div>

      <div className="screen-container">
        <div className="screen d-flex pt-3 justify-content-center">
          {props.mySeats.length ? props.mySeats.join(",") : ""}
        </div>
        <div className="seat_section">
          {seats &&
            seats.map((x) => (
              <div className={getSeatCSS(x)} onClick={(e) => addSeat(e)}>
                {x}
              </div>
            ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default TheatreOne;
