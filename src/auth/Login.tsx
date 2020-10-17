import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import APIURL from "../helpers/environment";

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
};
type UserState = {
  username: string;
  password: string;
};

export class Login extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  // handleSubmit = (e: FormEvent<Element> | React.FormEvent<HTMLElement>) => {
    handleSubmit = (e: any) => {
    if (this.state.username !== "" && this.state.password !== "") {
      e.preventDefault();
      fetch(`${APIURL}/user/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Wrong credentials or user does not exist");
          } else return res.json();
        })
        .then((data) => {
          // console.log(data);
          this.props.updateSessionToken(data.sessionToken);
          this.props.updateUserRole(data.user.admin);
          console.log("User successfully logged in");
        })
        .catch((err) => alert(err));
    } else {
      alert("Email and/or Password cannot be blank");
    }
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
      <div id="loginDiv">
        <h1 id="loginHeading">Login</h1>

        <ValidatorForm
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "35%",
            display: "block",
            backgroundColor: "#FFFFFF",
          }}
          ref="form"
          variant="outlined"
          onSubmit={this.handleSubmit}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            label="Username"
            onChange={this.handleUsernameChange}
            name="username"
            value={this.state.username}
            validators={["minStringLength:6", "required"]}
            autoComplete="off"
          />
          <TextValidator
            label="Password"
            onChange={this.handlePasswordChange}
            name="password"
            type="password"
            validators={["minStringLength:6", "required"]}
            errorMessages={["this field is required"]}
            value={this.state.password}
          />
          <br />
          <Button variant="contained" onClick={this.handleSubmit}>
            Login
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
