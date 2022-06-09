import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";
import Movies from "../components/movies";
import Login from "../components/login";
import NowShowing from "../components/booking";
import User from "../components/user";
import Tickets from "../components/tickets";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/calendar" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/nowshowing" element={<NowShowing />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const Home = () => {
  return <div>This is a Home Page</div>;
};

export default MyRoutes;
