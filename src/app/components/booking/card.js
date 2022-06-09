import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const CardInformation = (props) => {
  const { invoice } = props;

  const onBackClick = () => {
    props.onBack();
  };

  return (
    <div className="row pl-2 pr-2">
      <div
        className="col-lg-5 mb-lg-0 mb-3 "
        style={{ backgroundColor: "#E6F7F7" }}
      >
        <p className="mt-3">Your Booking Summary</p>
        {invoice && (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                Seats - <strong>{invoice.seats.join(",")}</strong>{" "}
              </div>
              <div>${invoice.ticketPrice}</div>
            </div>
            {invoice.food.length > 0 &&
              invoice.food.map((x) => (
                <div className="d-flex justify-content-between">
                  <div> {x.title} </div>
                  <div>${x.foodPrice}</div>
                </div>
              ))}
            <div className="d-flex justify-content-between">
              <div> Total </div>
              <strong>${invoice.totalPrice}</strong>
            </div>
          </div>
        )}
      </div>
      <div className="col-lg-7" style={{ backgroundColor: "#eee" }}>
        <div className="card-body card-background ">
          <p className="mb-4">Your payment details</p>

          <div className="form-outline mb-3">
            <input
              type="text"
              id="formControlLgXM8"
              className="form-control"
              placeholder="1234 5678 1234 5678"
            />
            <label className="form-label" for="formControlLgXM8">
              Card Number
            </label>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <div className="form-outline">
                <input
                  type="password"
                  id="formControlLgExpk8"
                  className="form-control"
                  placeholder="MM/YYYY"
                />
                <label className="form-label" for="formControlLgExpk8">
                  Expire
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-outline">
                <input
                  type="password"
                  id="formControlLgcvv8"
                  className="form-control"
                  placeholder="CVV"
                />
                <label className="form-label" for="formControlLgcvv8">
                  CVV
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2 mb-1">
        <button
          className="btn btn-info btn-block mr-5"
          onClick={() => onBackClick()}
        >
          Go Back
        </button>
        <button
          className="btn btn-info btn-block  ml-5"
          onClick={() => props.onSubmitHandler()}
        >
          Confirm Ticket
        </button>
      </div>
    </div>
  );
};

export default CardInformation;
