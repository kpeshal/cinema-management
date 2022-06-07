import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm();

  const formBuilder = () => {
    register("email", { required: true });
    register("password", { required: true });
  };

  const onSubmit = (data) => {
    props.onSubmit(data);
    // handleLogin();
  };

  const handleInputChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    if ((e.target ? e.target.validity.valid : e) || value === "") {
      setValue(field, value);
      clearErrors(field);
    }
  };

  useEffect(() => {
    formBuilder();
  }, []);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center mb-3 pb-1">
          <i
            className="fas fa-cubes fa-2x me-3"
            style={{ color: "#ff6219" }}
          ></i>
          <span className="h1 fw-bold mb-0"> Star Cinema</span>
        </div>

        <h4 className="fw-normal mb-2" style={{ letterSpacing: "1px" }}>
          Sign Into Star Cinema
        </h4>

        <div className="form-outline mb-2">
          <label className="form-label" for="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control form-control-lg"
            onChange={(e) => handleInputChange(e, "email")}
          />
          {errors.email && <span>* Email is required</span>}
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" for="email">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control form-control-lg"
            onChange={(e) => handleInputChange(e, "password")}
          />

          {errors.password && (
            <span className="error_message">* Password is required</span>
          )}
        </div>

        <div className="pt-1 mb-2">
          <button className="btn btn-dark btn-md btn-block" type="submit">
            Login
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
