import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { useForm } from "react-hook-form";

const MyModal = (props) => {
  const { show, handleClose, modalHeading, appointment } = props;

  const { register, handleSubmit, errors, setValue, clearError } = useForm();

  const formSubmit = (formValues) => {
    props.submit(formValues);
  };

  const handleInputChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    if ((e.target ? e.target.validity.valid : e) || value === "") {
      setValue(field, value);
      appointment[field] = value;
      clearError(field);
    }
  };

  const formBuilder = () => {
    register({ name: "id" });
    register({ name: "firstName" }, { required: true });
    register({ name: "lastName" }, { required: true });
    register({ name: "gender" }, { required: true });
    register({ name: "nhs" }, { required: true });
    register({ name: "appointmentDate" }, { required: true });
    register({ name: "status" }, { required: true });
    register(
      { name: "email" },
      {
        pattern:
          /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/i,
      }
    );
    if (appointment) {
      setValue([
        { id: appointment.id },
        { firstname: appointment.firstName },
        { lastName: appointment.lastName },
        { email: appointment.email },
      ]);
    }
  };

  React.useEffect(() => {
    formBuilder();
  }, []);

  return (
    <>
      <Modal show={show} closeButton onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Modal.Body>
            <MDBRow>
              <MDBCol size="6">
                <MDBInput
                  label="First Name *"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.firstName ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="firstName"
                  value={appointment?.firstName ? appointment.firstName : ""}
                  onChange={(e) => handleInputChange(e, "firstName")}
                />
              </MDBCol>
              <MDBCol size="6">
                <MDBInput
                  label="Last Name *"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.lastName ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="lastName"
                  value={appointment?.lastName ? appointment.lastName : ""}
                  onChange={(e) => handleInputChange(e, "lastName")}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBInput
                  label="Email"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.email ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="email"
                  value={appointment?.email ? appointment.email : ""}
                  onChange={(e) => handleInputChange(e, "email")}
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label="Gender"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.gender ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="email"
                  value={appointment?.gender ? appointment.gender : ""}
                  onChange={(e) => handleInputChange(e, "gender")}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBInput
                  label="NHS"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.nhs ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="nhs"
                  value={appointment?.nhs ? appointment.nhs : ""}
                  onChange={(e) => handleInputChange(e, "nhs")}
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label="Appointment Date"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={
                    errors.appointmentDate ? "mb-2 is-invalid" : "mb-2"
                  }
                  size="sm"
                  success="right"
                  name="appointmentDate"
                  value={
                    appointment?.appointmentDate
                      ? appointment.appointmentDate
                      : ""
                  }
                  onChange={(e) => handleInputChange(e, "appointmentDate")}
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label="Status"
                  group
                  type="text"
                  validate
                  error="wrong"
                  className={errors.status ? "mb-2 is-invalid" : "mb-2"}
                  size="sm"
                  success="right"
                  name="status"
                  value={appointment?.status ? appointment.status : ""}
                  onChange={(e) => handleInputChange(e, "status")}
                />
              </MDBCol>
            </MDBRow>
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

export default MyModal;
