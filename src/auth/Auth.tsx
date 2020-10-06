import React, { Component } from "react";
import APIURL from "../helpers/environment";
// import "./Auth.css";
import { Button } from "@material-ui/core";
import { Signup } from "./Signup";
import { Login } from "./Login";

type AcceptedProps = {
//   sessionToken: any;
//   username: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUsername: (newUsername: string) => void;
  updateUserRole: (newUserRole: string) => void;
//   userRole:(newUserRole: string) => void;
};
type UserState = {
  showLogin: boolean;
};
export default class Auth extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  loginToggle = (event: any) => {
    event.preventDefault();
    if (this.state.showLogin === true) {
      return this.setState({
        showLogin: false,
      });
    }
    if (this.state.showLogin === false) {
      return this.setState({
        showLogin: true,
      });
    }
  };

  render() {
    return (
      <div className="auth">
        <div id="signuplogin">
          {this.state.showLogin ? (
            <Login
              updateSessionToken={this.props.updateSessionToken}
              updateUsername={this.props.updateUsername}
              updateUserRole={this.props.updateUserRole}
			  />
		  ) : (
            <Signup
              updateSessionToken={this.props.updateSessionToken}
              updateUsername={this.props.updateUsername}
              updateUserRole={this.props.updateUserRole}
            />
          )}
          <br />
          <Button
            variant="contained"
            onClick={e => {this.loginToggle(e) }}>
            {this.state.showLogin ? "Signup Here" : "Login Here"}
          </Button>
        </div>
      </div>
    );
  }
}
