import React, {Component} from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
// import './signup.css';
import APIURL from "../../helpers/environment";

type ValueTypes = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};

export class UserEdit extends Component<AcceptedProps, ValueTypes> {
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
        <h3 id="signupHeading">Edit your account</h3>
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
          {/* <pre>{JSON.stringify(values, null, 5)}</pre> */}
          <Button
            variant="contained"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          >
           Edit account
          </Button>
        </FormControl>
      </div>
    );
  }
}
export default UserEdit;
