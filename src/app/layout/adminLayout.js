import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../common/sidebar";
const EmptyLayout = (props) => {
  return (
    <div
      style={{
        padding: "50px 0px 0px 370px",
      }}
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
