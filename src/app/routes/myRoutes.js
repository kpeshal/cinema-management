import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="/started" element={<Home />} />
        <Route path="/calendar" element={<Home />} />
        <Route path="/user" element={<Home />} />
        <Route path="/order" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const Home = () => {
  return <div>This is a Home Page</div>;
};

export default MyRoutes;
