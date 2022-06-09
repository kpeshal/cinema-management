import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MDBInput } from "mdbreact";

import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import * as movieService from "../../service/movieService";
import Toast from "../../common/toast";

const MovieModal = (props) => {
  const { show, handleClose, movie } = props;
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({
    type: "success",
    message: "",
    show: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearError,
    formState: { errors },
  } = useForm();

  const onSubmit = (formValues) => {
    saveMovie(formValues);
  };

  const saveMovie = async (data) => {
    setSubmitted(true);
    movieService
      .saveMovie(data)
      .then(
        (response) => {
          if (response.status === "success") {
            props.saveHandler(response.data);
            setToast({ type: "success", message: "Movie Updated", show: true });
          } else {
            setToast({
              type: "error",
              message: "Movie Update Failed",
              show: true,
            });
            console.log("Saving new movie failed", response);
          }
        },
        (error) => {
          // showToast("error", "Movie Saving Failed");
          console.log("Saving new movie failed", error);
        }
      )
      .finally(() => {
        setSubmitted(false);
      });
  };

  const handleInputChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    if ((e.target ? e.target.validity.valid : e) || value === "") {
      setValue(field, value);
      // movie[field] = value;
      // clearError(field);
    }
  };

  const formBuilder = () => {
    register("id");
    register("title", { required: false });
    register("cast", { required: false });
    register("director", { required: false });
    register("duration", { required: false });
    register("genre", { required: false });
    register("language", { required: false });
    register("description");
    if (movie) {
      setValue("id", movie.id);
      setValue("title", movie.title);
      setValue("cast", movie.cast);
      setValue("director", movie.director);
      setValue("duration", movie.duration);
      setValue("genre", movie.genre);
      setValue("language", movie.language);
      setValue("description", movie.description);
    }
  };

  React.useEffect(() => {
    formBuilder();
  }, []);

  return (
    <>
      {toast.show && <Toast type={toast.type} message={toast.message} />}
      <Modal show={show} closeButton onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Title"
                  id="title"
                  name="title"
                  onChange={(e) => handleInputChange(e, "title")}
                  defaultValue={movie.title ? movie.title : ""}
                  validate
                  type="text"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Cast"
                  id="cast"
                  name="cast"
                  onChange={(e) => handleInputChange(e, "cast")}
                  defaultValue={movie.cast ? movie.cast : ""}
                  validate
                  type="text"
                  size="small"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Duration in Minutes"
                  id="duration"
                  name="duration"
                  onChange={(e) => handleInputChange(e, "duration")}
                  defaultValue={movie.duration ? movie.duration : ""}
                  validate
                  type="number"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Genre"
                  id="genre"
                  name="genre"
                  onChange={(e) => handleInputChange(e, "genre")}
                  defaultValue={movie.genre ? movie.genre : ""}
                  validate
                  type="text"
                  size="small"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Language"
                  id="language"
                  name="language"
                  onChange={(e) => handleInputChange(e, "language")}
                  defaultValue={movie.language ? movie.language : ""}
                  validate
                  type="text"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Director"
                  id="director"
                  name="director"
                  onChange={(e) => handleInputChange(e, "director")}
                  defaultValue={movie.director ? movie.director : ""}
                  validate
                  type="text"
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
                  error="wrong"
                  className="mb-0"
                  // className={errors.note ? "mb-2 is-invalid" : "mb-2 pt-2"}
                  size="sm"
                  success="right"
                  name="notes"
                  value={movie?.description ? movie.description : ""}
                  //  onChange={(e) => handleInputChange(e, "description")}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            {submitted ? (
              <LinearProgress color="success" />
            ) : (
              <>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default MovieModal;
