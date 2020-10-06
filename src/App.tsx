import React, { Component } from "react";
import Auth from "./auth/Auth";
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
  userRole: string | null | undefined;
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
      userRole: "",
      // clearSessionToken: "",
      // updateSessionToken: "",
      // updateUsername: "",
      // updateUserRole: "",
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
  updateUserRole = (newUserRole: string) => {
    localStorage.setItem("userRole", newUserRole);
    this.setState({ userRole: newUserRole });
    console.log(this.state.userRole);
  };

  updateSessionToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  updateUsername = (newUsername: string) => {
    localStorage.setItem("username", newUsername);
    this.setState({ username: newUsername });
    console.log(newUsername);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: "" });
    sessionStorage.clear();
  };

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("token") ? (
      this.state.userRole === "admin" ? (
        <div>
          <AdminNavbar 
       
           />
          {/* <Admin /> */}
        </div>
      ) : (
        <div>
          <p>Login success.</p>
          <Navbar clearUser={this.clearUser} />
          {/* <Navbar clearUser={this.clearUser} /> */}
          {/* <User /> */}
        </div>
      )
    ) : (
      <div>
        <p>Please login.</p>
        <Auth
          updateSessionToken={this.updateSessionToken}
          updateUsername={this.updateUsername}
          updateUserRole={this.updateUserRole}
        />
       
      </div>
    );
  };
 

  render() {
    const session = localStorage.getItem("sessionToken");
    return (
      <div className="App">
        <div id="main" className="sideBar">
          <div className={session === null ? "mainDiv" : ""}>
            <Typography component="nav"></Typography>
            {
            session === null ? (
                  <Auth
                  updateSessionToken={this.updateSessionToken}
                  updateUsername={this.updateUsername}
                  updateUserRole={this.updateUserRole}
                />

              //   <Auth
              //     sessionToken={this.updateSessionToken}
              //     // updateSessionToken={this.updateSessionToken}
              //     // updateUsername={this.updateUsername}
              //     username={this.updateUsername}
              //     // updateUserRole={this.userRole}
              //     userRole={this.updateUserRole}
              //   />
              // ) : null
              // <NavBar clearToken={this.clearToken} sessionToken= {session}  role={this.state.userRole}/>
            // }
            ):this.protectedViews}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
