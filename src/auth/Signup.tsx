import * as React from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
// import {Form, FormGroup, FormLabel, Input} from 'reactstrap';
// import './signup.css';
// import './auth.css';
import APIURL from "../../src/helpers/environment";

type ValueTypes = {
  firstName: string;
  lastName: string;
  username: string;
  // setUsername: string;
  password: string;
  // setPassword: string;
};

type AcceptedProps = {
  // sessionToken: any;
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
};

export class Signup extends React.Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      // setUsername: "",
      password: "",
      // setPassword: "",
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
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateSessionToken(data.sessionToken);
        this.props.updateUsername(data.user.username);
        this.props.updateUserRole(data.user.userRole);
      });
  };
  render() {
    return (
      <div id="signupDiv">
        <h1 id="signupHeading">Sign Up to Join</h1>
        <FormControl>
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

// export default Signup;
