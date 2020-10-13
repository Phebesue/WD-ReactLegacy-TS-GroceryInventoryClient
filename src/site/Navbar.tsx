import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";

type AcceptedProps = {
  clearUser: () => void;
  sessionToken: string | null;
  username: string | null | undefined;
};

export class Navbar extends Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div className="mainNav">
        <div id="navContainer"></div>
        <h3>User Navbar</h3>
        <h3>Welcome {this.props.username}</h3>
        {/* <AppBar > */}
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/home"> User Home</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/vendorList">Vendor List</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/locationList">Location List</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/edit">Edit my Acct</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/grocery">Grocery</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/user/groceryCreate">Grocery Create</Link>
          </Button>

          <Button style={{ margin: "5em" }} onClick={this.props.clearUser}>
            <Link style={{color:"#000000"}} to="/home">Logout</Link>
            {/* Logout */}
          </Button>
          {console.log("Nav Footer")}
        </Toolbar>
        {/* </AppBar> */}
      </div>
    );
  }
}
export default Navbar;
