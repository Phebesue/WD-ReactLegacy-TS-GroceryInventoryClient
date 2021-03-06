import React, { Component } from "react";
import Auth from "./auth/Auth";
import SwitchController from "../src/site/SwitchController";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
// import moduleName from "formik";
import "./App.css";
import Footer from "./site/Footer";
import AdminNavbar from "../src/components/admin/AdminNavbar";
import Navbar from "./site/Navbar";
import Home from "../src/site/Home";

type sessionState = {
  sessionToken: string | null;
  username: string | null | undefined;
  userRole: string;
  locationId: number;
  vendorId: number;
  groceryId: number;
  userId: number;
};
export default class GroceryApp extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      username: "",
      userRole: "false",
      locationId: 0,
      vendorId:0,
      groceryId:0,
      userId:0,
    };
    this.protectedViews = this.protectedViews.bind(this);
  }

  componentDidUpdate() {
    console.log("Updated");
    console.log(`User is admin: ${localStorage.getItem("userRole")}`);
  }

  updateUserRole = (newUserRole: string) => {
    if (newUserRole !== null) {
      this.setState({ userRole: newUserRole });
      localStorage.setItem("userRole", newUserRole);
    } else {
      this.setState({ userRole: "false" });
      localStorage.setItem("userRole", "false");
    }
    console.log("Local Storage: ", localStorage);
    console.log(`Admin?: ${this.state.userRole}`);
  };

  updateSessionToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    console.log(`Token: ${newToken}`);
  };

  updateUsername = (newUsername: string) => {
    localStorage.setItem("username", newUsername);
    this.setState({ username: newUsername });
    console.log(`Username: ${newUsername}`);
  };

  updateLocationId = (newLocationId: number) => {
    this.setState({ locationId: newLocationId });
    console.log("locationId from App: ", newLocationId);
  };
  updateVendorId = (newVendorId: number) => {
    this.setState({ vendorId: newVendorId });
    console.log("vendorId from App: ", newVendorId);
  };
  updateGroceryId = (newGroceryId: number) => {
    this.setState({ groceryId: newGroceryId });
    console.log("groceryId from App: ", newGroceryId);
  };
  updateUserId = (newUserId: number) => {
    this.setState({ userId: newUserId });
    console.log("userId from App: ", newUserId);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: "false" });
    // sessionStorage.clear();
  };

  protectedViews = () => {
    console.log("userRole: ", this.state.userRole);
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      localStorage.getItem("userRole") === "true" ? (
        <AdminNavbar
          clearUser={this.clearUser}
          // updateSessionToken={this.updateSessionToken}
          // updateUsername={this.updateUsername}
          // updateUserRole={this.updateUserRole}
          // sessionToken={this.state.sessionToken}
          username={this.state.username}
        />
      ) : (
        <Navbar
          clearUser={this.clearUser}
          username={this.state.username}
          sessionToken={this.state.sessionToken}
        />
      )
    ) : (
      <Route exact path="/home">
        <Auth
          updateSessionToken={this.updateSessionToken}
          // updateUsername={this.updateUsername}
          updateUserRole={this.updateUserRole}
        />
        <Home />
      </Route>
    );
  };
  componentDidMount() {
    console.log("Mounted");
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") });
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
    // if (localStorage.getItem("userRole")) {
    //   this.setState({ userRole: localStorage.getItem("admin") });
    //   console.log(this.state.userRole)
    // }
  }

  render() {
    const session = localStorage.getItem("sessionToken");
    return (
      <div className="App">
        <header id="main">
          <h2> What's for Dinner?</h2>
        </header>
        <Router>
          {!session ? (
            <Auth
              updateSessionToken={this.updateSessionToken}
              // updateUsername={this.updateUsername}
              updateUserRole={this.updateUserRole}
            />
          ) : (
            this.protectedViews()
          )}
          <SwitchController
            updateSessionToken={this.updateSessionToken}
            updateUsername={this.updateUsername}
            updateUserRole={this.updateUserRole}
            sessionToken={this.state.sessionToken}
            username={this.state.username}
            userRole={this.state.userRole}
            protectedViews={this.protectedViews}
            clearUser={this.clearUser}
            updateLocationId={this.updateLocationId}
            updateVendorId={this.updateVendorId}
            updateGroceryId={this.updateGroceryId}
            updateUserId={this.updateUserId}
            locationId={this.state.locationId}
            vendorId={this.state.vendorId}
            groceryId={this.state.groceryId}
            userId={this.state.userId}
          />
          {console.log("Bottom of App")}
        </Router>
          <Footer />
      </div>
    );
  }
}
