import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";

import * as authService from "../../service/authService";
import * as userService from "../../service/userService";
import { decodeToken } from "../../util/decoder";
import { set, get, clear } from "../../util/storageUtil";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsLogin(!isLogin);
  };

  const onSubmitHandler = (model) => {
    authService
      .login(model)
      .finally(() => {
        // this.setState({ submittingForm: false });
      })
      .then((response) => {
        if (response.data && response.status === "success") {
          set("local", "loggedInUser", response.data.token);
          let user = decodeToken(response.data.token);
          set("local", "role", user.role);
          navigate("/movies");
        } else {
          alert(response.message);
        }
      });
  };

  const onRegisterHandler = (model) => {
    userService
      .saveUser(model)
      .finally(() => {})
      .then((response) => {
        if (response.data && response.status === "success") {
          alert("Registered as Star Movies User. Please Log In");
          handleSignUpClick();
        } else {
          alert(response.message);
        }
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {isLogin ? (
                        <LoginForm onSubmit={onSubmitHandler} />
                      ) : (
                        <SignUpForm handleRegister={onRegisterHandler} />
                      )}

                      <a
                        className="d-flex justify-content-center small text-muted mb-2"
                        href="#!"
                      >
                        {isLogin
                          ? "Don't have an account?"
                          : "Already have an account?"}
                      </a>
                      <button
                        className="btn btn-dark btn-md btn-block"
                        onClick={handleSignUpClick}
                      >
                        {isLogin ? "Sign Up" : "Log In"}
                      </button>

                      <div className="d-flex justify-content-center mt-1">
                        <a href="#!" clasName="small text-muted">
                          Terms of Use and Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
