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
//   updateSessionToken: (newToken: string) => void;
//   sessionToken: (newToken: string) => void;
//   updateUserRole: (newUserRole: boolean) => void;
//   updateUsername: (newUsername: string) => void;
  clearUser: () => void;
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
        <Button className="logout" onClick={this.props.clearUser}>Logout</Button>
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
