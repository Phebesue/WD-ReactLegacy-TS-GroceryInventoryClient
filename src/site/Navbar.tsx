import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

type AcceptedProps = {
  clearUser: () => void,
  // protectedViews: any,
  
}

type ValueTypes = {
  token: any,
  setToken: string | any,
  userName: string | any,
  setUserName: string | any,
  userRole: string | any,
}

class Navbar extends Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps){
      super(props);
      this.state = {
          token: "",
          setToken: "",
          userName: "",
          setUserName: "",
          userRole: "",
      };
      console.log(props)
  }

render() {


  return (
    <div className="sidebar">
      <div className="mainNav">
        {/* <div id="navContainer"> */}
          {/* <h2 style={{ color: "white" }}> */}
            {/* <div className="d-flex"> */}
              {/* <img className="media_image" src={Media} alt="" /> */}
              <h3>What's for dinner?</h3>
            </div>
          {/* </h2> */}
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
            
                    onClick={this.props.clearUser}
                  >LogOut
                    {/* <link
                     className="nav_links" to="">
                      Logout
                    </link> */}
                  </button>
                {/* </NavItem> */}
              </nav>
            {/* </Collapse> */}
          {/* </navbar> */}
        {/* </div> */}
      {/* // </div> */}
    </div>
  );
};
}
export default Navbar;
