import React, { Component } from "react";
import Auth from "./auth/Auth";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
// import moduleName from "formik";
import {
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  AppBar,
  Container,
} from "@material-ui/core";
import "./App.css";
import Footer from "./site/Footer";
import { Admin } from "../src/components/admin/Admin";
import User from "../src/components/user/User";
import AdminNavbar from "../src/components/admin/AdminNavbar";
import Navbar2 from "../src/site/Navbar2";

type sessionState = {
  sessionToken: string | null | undefined;
  username: string | null | undefined;
  userRole: string | null;
};
export default class GroceryApp extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      username: "",
      userRole: "false",
    };
    this.protectedViews=this.protectedViews.bind(this)
  }



  componentDidUpdate() {
    console.log("Updated");
    console.log(`User is admin: ${this.state.userRole}`);
    
  }

  updateUserRole = (newUserRole: string) => {
    if (newUserRole !== null) {
      this.setState({ userRole: newUserRole });
      localStorage.setItem("userRole", newUserRole);
    } else {
      this.setState({ userRole: "false" });
      localStorage.setItem("userRole", "false");
    }
    // console.log(localStorage);
    // console.log(`Admin?: ${this.state.userRole}`);
  };

  updateSessionToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    // console.log(`Token: ${newToken}`);
  };

  updateUsername = (newUsername: string) => {
    localStorage.setItem("username", newUsername);
    this.setState({ username: newUsername });
    console.log(`Username: ${newUsername}`);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: "false" });
    sessionStorage.clear();
  };

  protectedViews = () => {
    console.log("Summer was here")
    console.log("userRole: ",this.state.userRole)
  
    if (
      this.state.sessionToken === localStorage.getItem("sessionToken") &&
      localStorage.getItem("userRole") == "true"
    ) {
      return (
        <div>                    
          <AdminNavbar clearUser={this.clearUser} />
          <Admin
            updateSessionToken={this.updateSessionToken}
            sessionToken={this.state.sessionToken}
            updateUsername={this.updateUsername}
            updateUserRole={this.updateUserRole}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar2 clearUser={this.clearUser} />
          <User
            updateSessionToken={this.updateSessionToken}
            sessionToken={this.state.sessionToken}
            updateUsername={this.updateUsername}
            updateUserRole={this.updateUserRole}
          />
        </div>
      );
    }
  };
  componentDidMount() {
    console.log("Mounted");
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
    if (localStorage.getItem("userRole")) {
      this.setState({ userRole: localStorage.getItem("admin") });
      console.log(this.state.userRole)
    }
  }

  render() {
    const session = localStorage.getItem("sessionToken");
console.log("session was here", session)
    return (
      <div className="App">
        <div id="main">
          <h2> What's for Dinner?</h2>
          {/* <div className={session === null ? "mainDiv" : ""}> */}
          {/* <Typography component="nav"></Typography> */}
          {/* {session == null ? ( */}
          {!session ? (
            <Auth
              updateSessionToken={this.updateSessionToken}
              updateUsername={this.updateUsername}
              updateUserRole={this.updateUserRole}
            />
          ) : (
            this.protectedViews()
            )}
             {console.log("After Protected Views")}

          <Footer />
        </div>
      </div>
      );
  }
}
