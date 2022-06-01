import React from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout = (props) => {
  return (
    <div>
      <p>I am empty Layout</p>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
