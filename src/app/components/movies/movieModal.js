import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MDBInput } from "mdbreact";

import TextField from "@mui/material/TextField";

const MovieModal = (props) => {
  const { show, handleClose, movie } = props;

  //   const { register, handleSubmit, errors, setValue, clearError } = useForm();

  //   const formSubmit = (formValues) => {
  //     props.submit(formValues);
  //   };

  //   const handleInputChange = (e, field) => {
  //     let value = e.target ? e.target.value : e;
  //     if ((e.target ? e.target.validity.valid : e) || value === "") {
  //       setValue(field, value);
  //       movie[field] = value;
  //       clearError(field);
  //     }
  //   };

  //   const formBuilder = () => {
  //     register({ name: "id" });
  //     register({ name: "firstName" }, { required: true });
  //     register({ name: "lastName" }, { required: true });
  //     register({ name: "gender" }, { required: true });
  //     register({ name: "nhs" }, { required: true });
  //     register({ name: "movieDate" }, { required: true });
  //     register({ name: "status" }, { required: true });
  //     register(
  //       { name: "email" },
  //       {
  //         pattern:
  //           /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/i,
  //       }
  //     );
  //     if (movie) {
  //       setValue([
  //         { id: movie.id },
  //         { firstname: movie.firstName },
  //         { lastName: movie.lastName },
  //         { email: movie.email },
  //       ]);
  //     }
  //   };

  //   React.useEffect(() => {
  //    // formBuilder();
  //   }, []);

  return (
    <>
      <Modal show={show} closeButton onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <form
        //  onSubmit={handleSubmit(formSubmit)}
        >
          <Modal.Body>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Title"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Cast"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Duration in Minutes"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Genre"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Language"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Director"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <MDBInput
                  label="Description"
                  group
                  type="textarea"
                  validate
                  error="wrong"
                  className="mb-0"
                  // className={errors.note ? "mb-2 is-invalid" : "mb-2 pt-2"}
                  size="sm"
                  success="right"
                  name="notes"
                  // value={data?.notes ? data.notes : ""}
                  //  onChange={(e) => handleInputChange(e, "notes")}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default MovieModal;
