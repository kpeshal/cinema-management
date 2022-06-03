import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../common/sidebar";
const AdminLayout = (props) => {
  return (
    <div
      style={{
        padding: "0px 0px 0px 287px",
      }}
      className="admin-background pr-2"
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
