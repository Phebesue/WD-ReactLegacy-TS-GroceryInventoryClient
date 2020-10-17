import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import APIURL from "../../src/helpers/environment";

type UserState = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

type AcceptedProps = {
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

  handleSubmit = (e: any) => {
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.username !== "" &&
      this.state.password !== ""
    ) {
      e.preventDefault();
      fetch(`${APIURL}/user/signup`, {
        method: "POST",
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          admin: "false",
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.props.updateSessionToken(data.sessionToken);
        });
    } else {
      alert("None of the fields can be empty");
    }
  };
  handleFirstNameChange = (event: any) => {
    const firstName = event.target.value;
    this.setState({ firstName: firstName });
  };
  handleLastNameChange = (event: any) => {
    const lastName = event.target.value;
    this.setState({ lastName: lastName });
  };
  handleUsernameChange = (event: any) => {
    const username = event.target.value;
    this.setState({ username: username });
  };
  handlePasswordChange = (event: any) => {
    const password = event.target.value;
    this.setState({ password: password });
  };

  render() {
    return (
      <div id="signupDiv">
        <h1 id="signupHeading">Sign Up to Join</h1>

        <ValidatorForm
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "35%",
            display: "block",
            backgroundColor: "#FFFFFF",
          }}
          ref="form"
          onSubmit={this.handleSubmit}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            label="First Name"
            onChange={this.handleFirstNameChange}
            name="First Name"
            value={this.state.firstName}
            validators={["required"]}
            errorMessages={["this field is required"]}
            autoComplete="off"
          />
          <TextValidator
            label="Last Name"
            onChange={(e) => this.handleLastNameChange(e)}
            name="Last Name"
            value={this.state.lastName}
            validators={["required"]}
            errorMessages={["this field is required"]}
            autoComplete="off"
          />
          <TextValidator
            label="Username"
            onChange={(e) => this.handleUsernameChange(e)}
            name="Username"
            value={this.state.username}
            validators={["minStringLength:6", "required"]}
            errorMessages={[
              "Username should be more than 5 letters",
              "this field is required",
            ]}
            autoComplete="off"
          />
          <TextValidator
            label="Password"
            onChange={this.handlePasswordChange}
            name="password"
            value={this.state.password}
            type="password"
            validators={["minStringLength:6", "required"]}
            errorMessages={[
              "password should be more than 5 letters",
              "this field is required",
            ]}
          />
          <br />
          <Button variant="contained" onClick={this.handleSubmit}>
            Sign Up
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
