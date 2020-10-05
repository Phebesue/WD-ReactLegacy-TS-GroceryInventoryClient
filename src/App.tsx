import React, { Component } from "react";
import Auth from "./auth/Auth";
import moduleName from "formik";
// import UserEdit from "./auth/UserEdit";
// import Sitebar from "./site/Navbar";
import { Paper, Tabs, Tab, Box, Typography, AppBar, Container } from '@material-ui/core';
import "./App.css";
import Home from "./site/Header";
import Footer from "./site/Footer";
import { Signup } from "./auth/Signup";
import { Login } from "./auth/Login";
import { Admin } from "../src/components/admin/Admin";

// type acceptedProps = {
//   updateToken: any;
//   updateUserName: any;
//   clearToken: any;
//   setUsername: any;
//   sessionToken: any;
// };

type sessionState = {
  setSessionToken: string | any;
  clearSessionToken: string | null;
  updateSessionToken: string | null;
  updateUsername: string | null;
  setUsername: string | null;
  setUserRole: string | null;
  sessionToken: any;
};
export default class GroceryApp extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      setSessionToken: "",
      clearSessionToken: "",
      updateSessionToken: "",
      updateUsername: "",
      setUsername: "",
      setUserRole: "",
      sessionToken: "",
    };
  }
  componentDidMount() {
    console.log("Mounted");
    if (localStorage.getItem("username")) {
      this.setState({ setUsername: localStorage.getItem("username") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ setSessionToken: localStorage.getItem("sessionToken") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ setSessionToken: localStorage.getItem("sessionToken") });
    }
  }
    updateUserRole= (newUserRole: string) => {
      localStorage.setItem("userRole", newUserRole);
      this.setState({ setUserRole: newUserRole });
      console.log(this.state.setUserRole);
    };

    updateSessionToken = (newToken: string) => {
      localStorage.setItem("token", newToken);
      this.setState({ setSessionToken: newToken });
      console.log(newToken);
    };

    updateUsername = (newUsername: string) => {
      localStorage.setItem("username", newUsername);
      this.setState({ setUsername: newUsername });
      console.log(newUsername);
    };

    
    clearToken = () => {
      localStorage.clear();
      this.setState({setSessionToken: "",
      });
      sessionStorage.clear();
    };
    
  protectedViews = () => {
    return this.state.setSessionToken === localStorage.getItem("sessionToken") ? (
      <Signup
      sessionToken={this.state.setSessionToken} setUsername={this.updateUsername} 
      /> 
      ) : (
     <Auth
      sessionToken={this.state.sessionToken}
      updateSessionToken={this.updateSessionToken}
      updateUsername={this.updateUsername}
      setUsername={this.updateUsername}
      updateUserRole={this.updateUserRole}
      setUserRole={this.state.setUserRole}

      />
     )
  };
  adminView = () => {
    return this.state.setSessionToken === localStorage.getItem("sessionToken") ? (
        <Admin 
        sessionToken={this.updateSessionToken}
        setUsername={this.updateUsername}
        updateUserRole={this.updateUserRole}

        />
    ) : (
      <Auth
      sessionToken={this.state.sessionToken}
      updateSessionToken={this.updateSessionToken}
      updateUsername={this.updateUsername}
      setUsername={this.updateUsername}
      updateUserRole={this.updateUserRole}
      setUserRole={this.state.setUserRole}
      />
    )
  }


  render() {
    const session = localStorage.getItem("sessionToken")
    return (
      <div className="App">
        <div id="main" className="sideBar">
    return (
      <div className={session === null ? "mainDiv" : ""}>
        <Typography component="nav">

        </Typography>
        {session === null ?
          <Auth   sessionToken={this.state.sessionToken}
          updateSessionToken={this.updateSessionToken}
          updateUsername={this.updateUsername}
          setUsername={this.updateUsername}
          updateUserRole={this.updateUserRole}
          setUserRole={this.state.setUserRole}/> : null
          // <NavBar clearToken={this.clearToken} sessionToken= {session}  role={this.state.userRole}/>
        }
      </div>
      </div>
      </div>
    );
  }
}