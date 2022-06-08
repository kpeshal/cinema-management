import React from "react";

const Seats = (props) => {
  return (
    <div className="section section_div">
      {props.values.map((seat) => {
        const isBooked = props.bookedSeats.includes(seat);

        return (
          <div
            className="section_div"
            onClick={() => props.addSeat(seat)}
            key={seat}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
};
export default Seats;
