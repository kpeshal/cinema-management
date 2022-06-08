import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { decodeToken } from "../../app/util/decoder";
import { set, get, clear } from "../../app/util/storageUtil";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
    role: "admin",
  },
  {
    display: "Movies",
    icon: <i className="bx bx-star"></i>,
    to: "/movies",
    section: "movies",
    role: "all",
  },
  {
    display: "Now Showing",
    icon: <i className="bx bx-calendar"></i>,
    to: "/nowshowing",
    section: "nowshowing",
    role: "all",
  },
  {
    display: "User",
    icon: <i className="bx bx-user"></i>,
    to: "/user",
    section: "user",
    role: "admin",
  },
  {
    display: "Orders",
    icon: <i className="bx bx-receipt"></i>,
    to: "/order",
    section: "order",
    role: "user",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [menu, setMenu] = useState([]);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = menu.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  useEffect(() => {
    let menu = sidebarNavItems;
    const role = get("local", "role").toLowerCase();
    if (role === "admin") {
      menu = menu.filter((x) => !(x.role === "user"));
      console.log(menu);
    } else {
      menu = menu.filter((x) => !(x.role === "admin"));
    }

    setMenu(menu);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Cinema</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>

        {menu.map((item, index) => (
          <Link to={item.to} key={index} className="text-decoration-none">
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
