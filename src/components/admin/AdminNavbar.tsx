import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";


type ValueTypes = {};
type AcceptedProps = {
  clearUser: () => void;
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};

export class AdminNavbar extends Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
    console.log("Props from Admin Navbar: ",props);
  }
  render() {
    return (
      <div>
        <div id="adminContainer">
          <div style={{ display: "block", justifyContent: "flex-start" }}className="header">
            <h3 className="header">AdminNavbar</h3> <br />
            <h3>Welcome {this.props.username}</h3>
            <h5> What would you like to manage?</h5>
          </div>
        </div>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/admin/home">Admin Home</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/admin/vendors">Vendor</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/admin/locations">Locations</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/admin/userTable">User Management</Link>
          </Button>

          <Button style={{ margin: "5em" }}>
            <Link style={{color:"#000000"}} to="/admin/grocery">Grocery</Link>
          </Button>

          <Button style={{ margin: "5em" }} onClick={this.props.clearUser}>
            <Link style={{color:"#000000"}} to="/home">Logout</Link>
            {/* Logout */}
          </Button>
          {console.log("Admin Nav Footer")}
        </Toolbar>
      </div>
    );
  }
}
export default AdminNavbar;
