import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

// import Home from "./Home";
// import MediaTable from "../media/MediaTable";
// import MediaIndex from "../media/MediaIndex";
// import MediaCreate from "../media/MediaCreate";
// import MediaActions from "../media/MediaActions";
// import MediaAll from "../media/MediaAll";
// import UserEdit from "../auth/UserEdit";
// import Media from "../assets/Media.png";
import "./Navbar.css";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   Nav,
//   NavItem,
//   Button,
// } from "reactstrap";

const Sitebar = (props:any) => {
//   const [isOpen, setIsOpen] = useState(false);
  // const [deleteId, setDeleteId] = useState('');

  const toggle = () => {
    // let newIsOpen = !isOpen;
    // setIsOpen(newIsOpen);
  };

  return (
    <div className="sidebar">
      <div className="mainNav">
        <div id="navContainer">
          <h2 style={{ color: "white" }}>
            <div className="d-flex">
              {/* <img className="media_image" src={Media} alt="" /> */}
              <h3>What's for dinner?</h3>
            </div>
          </h2>
          {/* <navbar color="black" light expand="md">
            <navbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar> */}
              <nav className="nav-fill w-100">
                {/* <navItem> */}
                  <button className="nav_buttons">
                    {/* <link className="nav_links" to="/mediaCreate">
                      Add Media
                    </link> */}
                  </button>
                {/* </navItem> */}
                {/* <NavItem> */}
                  <button className="nav_buttons" color="secondary">
                    {/* <link className="nav_links" to="/mediaAll">
                      View All Media
                    </link> */}
                  </button>
                {/* </NavItem> */}
                {/* <NavItem> */}
                  <button className="nav_buttons" color="secondary">
                    {/* <link className="nav_links" to="/mediaMine">
                      View My Media
                    </link> */}
                  </button>
                {/* </NavItem> */}
                {/* <NavItem> */}
                  <button className="nav_buttons" color="secondary">
                    {/* <link className="nav_links" to="/userEdit">
                      User Edit
                    </link> */}
                  </button>
                {/* </NavItem> */}
                {/* <NavItem> */}
                  <button
                    className="nav_buttons"
                    color="secondary"
                    onClick={props.clearToken}
                  >
                    {/* <link
                     className="nav_links" to="">
                      Logout
                    </link> */}
                  </button>
                {/* </NavItem> */}
              </nav>
            {/* </Collapse> */}
          {/* </navbar> */}
        </div>
      </div>
    </div>
  );
};
export default Sitebar;
