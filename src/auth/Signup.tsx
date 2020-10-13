import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
// import './signup.css';
import APIURL from "../../src/helpers/environment";

type UserState = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
};

export class Signup extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${APIURL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        admin: "false"
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.updateSessionToken(data.sessionToken);
        this.props.updateUserRole(data.user.admin);
      });
  };
  render() {
    return (
      <div id="signupDiv">
        <h1 id="signupHeading">Sign Up to Join</h1>
        <FormControl style={{backgroundColor:"#FFFFFF"}}>
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            onChange={(e) => {
              this.setState({ firstName: e.target.value });
            }}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }}
          />
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
            //   title="Username must include one number, one capital letter, and be 4-15 characters in length."
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            /* pattern="[a-zA-Z0-9]+"
              title="Password must contain one number, one capital letter, and be 5-15 characters in length." */
          />
          {/* <pre>{JSON.stringify(values, null, 5)}</pre> */}
          <Button
            variant="contained"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          >
            Signup
          </Button>
        </FormControl>
      </div>
    );
  }
}
