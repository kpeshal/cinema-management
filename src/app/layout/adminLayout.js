import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../common/sidebar";
const AdminLayout = (props) => {
  return (
    <div
      style={{
        padding: "0px 0px 0px 285px",
      }}
      className="admin-background"
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
