import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MDBInput } from "mdbreact";

import TextField from "@mui/material/TextField";

import * as movieService from "../../service/movieService";

const MovieModal = (props) => {
  const { show, handleClose, movie } = props;

  const {
    register,
    handleSubmit,
    setValue,
    clearError,
    formState: { errors },
  } = useForm();

  const onSubmit = (formValues) => {
    saveMovie(formValues);
  };

  const saveMovie = async (data) => {
    movieService.saveMovie(data).then(
      (response) => {
        if (response.status === "success") {
          props.saveHandler(response.data);
          alert("Success! Movie Updated Successfully");
        } else {
          alert("Error! Failed to Update Movie ");
          console.log("Saving new movie failed", response);
        }
      },
      (error) => {
        alert("Error Saving Movie");
        console.log("Saving new movie failed", error);
      }
    );
  };

  const handleInputChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    if ((e.target ? e.target.validity.valid : e) || value === "") {
      setValue(field, value);
      movie[field] = value;
      clearError(field);
    }
  };

  const formBuilder = () => {
    register("id");
    register("title", { required: true });
    register("cast", { required: true });
    register("director", { required: true });
    register("duration", { required: true }, { min: 10 });
    register("genre", { required: true });
    register("language", { required: false });
    register("description", { required: false });
    register("imageUrl");
    register("price", { required: "true" }, { min: 0 });
    if (movie) {
      setValue("id", movie.id);
      setValue("title", movie.title);
      setValue("cast", movie.cast);
      setValue("director", movie.director);
      setValue("duration", movie.duration);
      setValue("genre", movie.genre);
      setValue("language", movie.language);
      setValue("description", movie.description);
      setValue("imageUrl", movie.imageUrl);
      setValue("price", { required: true });
    }
  };

  React.useEffect(() => {
    formBuilder();
  }, []);

  return (
    <>
      <Modal show={show} closeButton onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body
            style={{
              backgroundColor: "#eee",
              borderRadius: "3%",
              margin: "3px",
            }}
          >
            <div className="row mb-3">
              <div className="col">
                <TextField
                  label="Title"
                  id="title"
                  name="title"
                  onChange={(e) => handleInputChange(e, "title")}
                  defaultValue={movie.title ? movie.title : ""}
                  validate
                  className={errors.title ? "is-invalid" : ""}
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
                  className={errors.cast ? "is-invalid" : ""}
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
                  className={errors.duration ? "is-invalid" : ""}
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
                  className={errors.genre ? "is-invalid" : ""}
                  onChange={(e) => handleInputChange(e, "genre")}
                  defaultValue={movie.genre ? movie.genre : ""}
                  validate
                  type="text"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField
                  label="Price ($)"
                  id="price"
                  name="price"
                  className={errors.price ? "is-invalid" : ""}
                  onChange={(e) => handleInputChange(e, "price")}
                  defaultValue={movie.price ? movie.price : ""}
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
                  className={errors.language ? "is-invalid" : ""}
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
                  className={errors.director ? "is-invalid" : ""}
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
                  label="Image Url"
                  group
                  type="textarea"
                  error="wrong"
                  className={errors.imageUrl ? "is-invalid" : ""}
                  size="sm"
                  success="right"
                  name="imageUrl"
                  id="imageUrl"
                  value={movie?.imageUrl ? movie.imageUrl : ""}
                  onChange={(e) => handleInputChange(e, "imageUrl")}
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
                  className={errors.description ? "is-invalid" : ""}
                  size="sm"
                  success="right"
                  name="description"
                  id="description"
                  value={movie?.description ? movie.description : ""}
                  onChange={(e) => handleInputChange(e, "description")}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-end">
            <Button variant="secondary" type="submit">
              Save
            </Button>
            {/* <Button variant="primary" type="submit">
              Save
            </Button> */}
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default MovieModal;
