import React, { Component } from "react";
import Footer from "../site/Footer";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

type AcceptedProps = {
  clearUser: () => void;
  updateUsername: (newUsername: string) => void;
};

export class Navbar2 extends Component<AcceptedProps, {}> {
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

        {/* <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul> */}
        <br />
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ marginRight: "5em" }} onClick={this.props.clearUser}>
            Home
          </Button>
          <Button style={{ marginLeft: "5em" }} onClick={this.props.clearUser}>
            Logout
          </Button>
          {console.log("Nav2 Footer")}
        </Toolbar>
      </div>
    );
  }
}
export default Navbar2;
