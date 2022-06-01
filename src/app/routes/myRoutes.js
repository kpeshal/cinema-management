import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import AppRoute from "./appRoute";
import EmptyLayout from "../layout/emptyLayout";
import Login from "../components/login/login";

//import Appointments from "../components/appointment";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<EmptyLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const Home = () => {
  return <h1>I am Home</h1>;
};

export default MyRoutes;
