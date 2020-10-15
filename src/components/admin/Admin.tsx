import React, { Component } from "react";
import AdminLocationMgmt from "../locations/AdminLocationMgmt";
import AdminVendorMgmt from "../vendors/AdminVendorMgmt";
import AdminEditUser from "../admin/AdminEditUser";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminGroceryMgmt from "../grocery/AdminGroceryMgmt";
import { Button } from "@material-ui/core";
import AppBarStyles from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import "./Admin.css";
import APIURL from "../../helpers/environment";
// import Radium from 'radium';

type AdminProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};

// const styles = {
//   table: {
//     minWidth: 650,
//   },
// };

export class Admin extends Component<AdminProps, {}> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="adminDiv">
        <div id="adminContainer">
          <div>
            {/* <div style={{ display: "flex", justifyContent: "flex-start" }}></div> */}
            <div
              style={{ width: "50%", display: "block" }}
              // style={{ display: "flex", justifyContent: "spaceBetween" }}
              // className="options"
            >
              {/* <h3>Grocery Inventory</h3> */}
              <h5> Admin user functionality: </h5>
              <ul>
                <li>Pull a list of all registered users and delete users</li>
                <li>Add, edit & delete vendors</li>
                <li>Add, edit & delete locations available to track on hand</li>
                <li>Edit & delete users</li>
                <li>Delete grocery items</li>
              </ul>
            </div>{" "}
          </div>
        </div>

        {console.log("Admin Footer")}
      </div>
    );
  }
}

export default Admin;
