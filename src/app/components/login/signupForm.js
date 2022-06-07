import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const formBuilder = () => {
    register("email", { required: "Email is Required" });
    register("password", {
      required: "You must specify a password",
      minLength: {
        value: 5,
        message: "Min 5 characters required",
      },
    });
    register("confirmPassword", {
      validate: (value) =>
        value === password.current || "The passwords do not match",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
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

        <h4 className="fw-normal mb-3" style={{ letterSpacing: "1px" }}>
          Sign Up For Star Cinema
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
          {errors.email && (
            <p className="error_message"> {errors.email.message}</p>
          )}
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
            <p className="error_message">{errors.password.message}</p>
          )}
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" for="confirmPassword">
            Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control form-control-lg"
            onChange={(e) => handleInputChange(e, "confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="error_message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="pt-1 mb-2">
          <button className="btn btn-dark btn-md btn-block" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUpForm;
