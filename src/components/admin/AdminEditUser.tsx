import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { Link } from "react-router-dom";
import { FormControl, TextField, Button } from "@material-ui/core";
import { UserDetails, UserData } from "../../Interfaces";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

type AdminProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
  userId: number;
  updateUserId: (newUserId: number) => void;
};

type UserState = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin: string;
  userData: UserDetails[];
  results: UserDetails;
};

export default class AdminEditUser extends Component<AdminProps, UserState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {
      id: 0,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      admin: "",
      userData: [
      {  id: 0,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        admin: "",}
      ],
      results: {
        id: 0,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        admin: "",
      },
    };
  }

  fetchUser = () => {
    console.log("Before User Fetch", this.props.sessionToken);
    if (this.props.sessionToken) {
      fetch(`${APIURL}/user/one/${this.props.userId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          // console.log(results.firstName),
          this.setState({ id: results.id });
          this.setState({ firstName: results.firstName });
          this.setState({ lastName: results.lastName });
          this.setState({ username: results.username });
          this.setState({ admin: results.admin });
          // console.log("hi", results.id);
        })

        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/user/admin/${this.props.userId}`, {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          admin: this.state.admin,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  handleDelete = (id: number | undefined) => {
    if (this.props.sessionToken) {
      fetch(`${APIURL}/user/${this.props.userId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": this.props.sessionToken,
        }),
      })
        .then((res) => {
          this.fetchUser();
        })
        .catch((err) => alert(err));
    }
  };
  componentDidMount() {
    this.fetchUser();
    // console.log(data)
  }
  render() {
    return (
      <div id="editUserDiv">
        <h3 id="editUserHeading">Edit an account</h3>
        {/* {console.log(this.state.username)} */}
        <FormControl  style={{backgroundColor:"#FFFFFF"}}>
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            value={this.state.firstName}
            onChange={(e) => {
              this.setState({ firstName: e.target.value });
            }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            value={this.state.lastName}
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }}
          />
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          {/* <TextField
            label="New Password"
            variant="outlined"
            type="text"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          /> */}
          <TextField
            label="Admin?"
            variant="outlined"
            type="text"
            value={this.state.admin}
            onChange={(e) => {
              this.setState({ admin: e.target.value });
            }}
          />

          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.handleSubmit(e);
                console.log(`
                id: ${this.state.id},
                firstName: ${this.state.firstName},
                  lastName: ${this.state.lastName},
                  username: ${this.state.username},
                  admin: ${this.state.admin},            
                  `);
              }}
            >
              <EditIcon />
              <Link to="/admin/userMgmt">Edit</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              value={this.state.id}
              onClick={(e) => {
                // console.log(this.state.id);
                this.handleDelete(this.state.id);
              }}
            >
              <DeleteIcon />
              <Link to="/admin/userTable">Delete</Link>
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}
