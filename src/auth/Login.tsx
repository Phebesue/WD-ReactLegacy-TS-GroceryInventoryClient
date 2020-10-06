import * as React from "react";
// import {Form, FormGroup, Input, Label} from 'reactstrap';
import { FormControl, TextField, Button } from "@material-ui/core";
// import "./login.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import './login.css';
// import './auth.css';
import APIURL from "../helpers/environment";

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
};
type UserState = {
  username: string;
  // setUsername: string;
  password: string;
  // setPassword: string;
};

export class Login extends React.Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      username: "",
      // setUsername: "",
      password: "",
      // setPassword: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(this.props);
        console.log(data);
        console.log(data.sessionToken);
        this.props.updateSessionToken(data.sessionToken);
        this.props.updateUsername(data.user.username);
        this.props.updateUserRole(data.user.userRole);
      });
  };
  render() {
    return (
      <div id="loginDiv">
        <h1 id="loginHeading">Login</h1>
        <FormControl>
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
          <Button
            variant="contained"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          >
            Login
          </Button>
        </FormControl>
      </div>
    );
  }
}

// export default Login;
