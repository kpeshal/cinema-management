import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as movieService from "../../service/movieService";
import * as seatService from "../../service/seatService";
import Toast from "../../common/toast";
import CardInformation from "./card";

const BookingModal = (props) => {
  const { show, handleClose, movie, seats, handleSave } = props;

  const [page, setPage] = useState(1);
  const [foodList, setFoodList] = useState([]);
  const [invoice, setInvoice] = useState(undefined);

  const fetchFoodItems = () => {
    setFoodList([]);
    movieService
      .fetchAllFoods()
      .then((result) => {
        if (result.status === "success") {
          setFoodList(result.data);
        }
      })
      .catch((error) => {
        alert("Errror Fetching Food List");
      });
  };
  const handleFoodSelect = (food) => {
    let newList = [...foodList];
    newList.map((x) => {
      if (x.id === food.id) {
        x.checked = !food.checked;
      }
      return x;
    });
    setFoodList(newList);
  };

  const foodOrder = () => {
    let a = foodList.filter((x) => x.checked);

    a.map((x) => {
      x.foodPrice = x.price * seats.length;
      return x;
    });
    console.log(a);
    return a;
  };

  const createInvoiceObject = () => {
    let invoiceObject = {};
    invoiceObject.seats = seats;
    invoiceObject.food = foodOrder();
    invoiceObject.ticketPrice = movie.price * seats.length;
    invoiceObject.totalPrice =
      invoiceObject.ticketPrice +
      foodOrder().reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);

    setInvoice(invoiceObject);
  };

  const confirmTickets = () => {
    let model = [];
    invoice.seats.map((x) => {
      let data = {};
      data.seatNo = x;
      data.theatreName = "Theatre1";
      data.movieId = movie.id;
      model.push(data);
      return null;
    });
    seatService
      .saveSeats(model)
      .then(
        (response) => {
          if (response.status === "success") {
            alert("Success! Tickets Booked Successfully");
            handleSave();
          } else {
            alert("Error! Failed To Book Tickets ");
          }
        },
        (error) => {
          alert("Error Booking Tickets");
        }
      )
      .finally(() => {
        handleClose();
      });
  };

  const onProceed = () => {
    createInvoiceObject();
    setPage(2);
  };

  const onBackClick = () => {
    setPage(1);
  };

  React.useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <>
      <Modal show={show} closeButton onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Confirm Tickets</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {page === 1 && (
            <div>
              <strong> Pre Order Foods With Tickets ? </strong>
              <div className="d-flex flex-column">
                {foodList &&
                  foodList.map((food, index) => {
                    // const isChecked = selectedServices.some(item => item.tenantOfferingId === service.tenantOfferingId);
                    return (
                      <div className="d-flex flex-row text-center ">
                        <label key={index} className="d-flex">
                          <input
                            type="checkbox"
                            value={food.title}
                            name="title"
                            checked={food.checked}
                            onChange={() => handleFoodSelect(food)}
                            className="mt-1"
                          />
                          <div className=" d-flex  pl-3 pr-5 text-center justify-content-center align-items-center">
                            {food.title} - <strong>{food.price}</strong>
                          </div>
                        </label>
                      </div>
                    );
                  })}
              </div>
              <div className="d-flex justify-content-end">
                <Button variant="secondary" onClick={() => onProceed()}>
                  Proceed
                </Button>
              </div>
            </div>
          )}
          {page === 2 && (
            <CardInformation
              onBack={onBackClick}
              invoice={invoice}
              onSubmitHandler={confirmTickets}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookingModal;
