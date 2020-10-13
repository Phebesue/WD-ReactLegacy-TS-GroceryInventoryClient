import React, {Component} from 'react';
import { FormControl, TextField, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import './login.css';
import APIURL from "../helpers/environment";

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
};
type UserState = {
  username: string;
  password: string;
};

export class Login extends React.Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLElement>) => {
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
      throw new Error("User does not exist");
    } else return res.json();
  })
  .then((data) => {
    // console.log(data);
    this.props.updateSessionToken(data.sessionToken);
    this.props.updateUserRole(data.user.admin);
    this.props.updateUsername(data.user.username);
    console.log("User successfully logged in");
  })
  .catch((err) => alert(err));
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
