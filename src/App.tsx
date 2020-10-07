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
import Home from "./site/Header";
import Footer from "./site/Footer";
import { Signup } from "./auth/Signup";
import { Login } from "./auth/Login";
import { Admin } from "../src/components/admin/Admin";
import User from "../src/components/user/User";
import AdminNavbar from "../src/components/admin/AdminNavbar";
import Navbar from "../src/site/Navbar";

// type acceptedProps = {
//   updateToken: any;
//   updateUserName: any;
//   clearToken: any;
//   username: any;
//   sessionToken: any;
// };

type sessionState = {
  sessionToken: string | null | undefined;
  username: string | null | undefined;
  userRole: boolean | null;
  // setSessionToken: string | any;
  // clearSessionToken: string | null;
  // updateSessionToken: string | null;
  // updateUsername: string | null;
  // updateUserRole: string | null;
};
export default class GroceryApp extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      username: "",
      userRole: false,
    };
  }
  componentDidMount() {
    console.log("Mounted");
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  componentDidUpdate() {
    console.log("Updated");
    console.log(`User is admin: ${this.state.userRole}`);
  }

  updateUserRole = (newUserRole: boolean) => {
    if (newUserRole !== null) {
      this.setState({ userRole: newUserRole });
      localStorage.setItem("userRole", newUserRole.toString());
    } else {
      this.setState({ userRole: false });
      localStorage.setItem("userRole", "false");
    }
    // console.log(localStorage);
    console.log(`Admin?: ${this.state.userRole}`);
  };

  updateSessionToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
    console.log(`Token: ${newToken}`);
  };

  updateUsername = (newUsername: string) => {
    localStorage.setItem("username", newUsername);
    this.setState({ username: newUsername });
    console.log(`Username: ${newUsername}`);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: false });
    sessionStorage.clear();
  };

  protectedViews = () => {
      if (
      this.state.sessionToken === localStorage.getItem("token") &&
      this.state.userRole
    ) {return(
      <div>        
             <AdminNavbar
              clearUser={this.clearUser}
                        />        
        <Admin updateSessionToken={this.updateSessionToken}
        sessionToken={this.updateSessionToken}
        updateUsername={this.updateUsername}
        updateUserRole={this.updateUserRole}/> 
      </div>
      )
    } else {return(
   <Navbar clearUser={this.clearUser} />)};
      {
        /* <User /> */
      }
    }
  

  render() {
    const session = localStorage.getItem("sessionToken");

    return (
      <div className="App">
        <div id="main" className="sideBar">
          {/* <div className={session === null ? "mainDiv" : ""}> */}
          {/* <Typography component="nav"></Typography> */}
          {
            session == null ? (
              <Auth
                updateSessionToken={this.updateSessionToken}
                updateUsername={this.updateUsername}
                updateUserRole={this.updateUserRole}
              />
            ) : (
              (console.log("Call Protected Views"), this.protectedViews)
            )
            // <Navbar clearUser={this.clearUser} updateSessionToken= {session}  role={this.state.userRole}/>
          }
          {this.protectedViews()}

          <Footer />
        </div>
      </div>
      // </div>
    );
  }
}
