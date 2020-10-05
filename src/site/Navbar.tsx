import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

type acceptedProps = {
  clearToken: any,
  protectedViews: any,
  protectedViewsTwo: any,
  protectedViewsThree: any
}

type valueTypes = {
  token: any,
  setToken: string | any,
  userName: string | any,
  setUserName: string | any,
  userRole: string | any,
}

export default class SiteBar extends React.Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps){
      super(props);
      this.state = {
          token: "",
          setToken: "",
          userName: "",
          setUserName: "",
          userRole: "",
      };
  }

render() {


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
            
                    onClick={this.props.clearToken}
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
}

