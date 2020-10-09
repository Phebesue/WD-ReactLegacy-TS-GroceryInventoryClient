import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Admin } from "../admin/Admin";
import { render } from "@testing-library/react";

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
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>AdminNavbar</h3>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ marginRight: "5em" }} onClick={this.props.clearUser}>
            Home
          </Button>
          <Button style={{ marginLeft: "5em" }} onClick={this.props.clearUser}>
            Logout
          </Button>
          {console.log("Nav2 Footer")}
        </Toolbar>
        <Toolbar>
          <MenuIcon />
          <PersonIcon />
          <PersonOutlineIcon />
        </Toolbar>
      </div>
    );
  }
}
export default AdminNavbar;
