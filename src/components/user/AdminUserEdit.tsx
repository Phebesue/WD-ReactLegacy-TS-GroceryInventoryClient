import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import {UserDetails} from '../../Interfaces'
import APIURL from "../../helpers/environment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

type UserDataState = {
  editId: number;
  editFirstName: string;
  editLastName: string;
  editUsername: string;
  editPassword: string;
  editAdmin: string;
  userData: UserDetails[];
  results: UserDetails;
};

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  clearUser: () => void;
  sessionToken: any;
  // sessionToken: string | null;
};

export class UserEdit extends Component<AcceptedProps, UserDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      editId: 0,
      editFirstName: "",
      editLastName: "",
      editUsername: "",
      editPassword: "",
      editAdmin: "",
      userData: [],
      results: {
        id: 0,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        role: "",
      },
    };
    console.log("st: ", this.props.sessionToken);
  }

  fetchUser = () => {
    console.log("Before User Fetch", this.props.sessionToken);
    if (this.props.sessionToken) {
      fetch(`${APIURL}/user/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          // console.log(results.firstName),
          this.setState({ editId: results.id });
          this.setState({ editFirstName: results.firstName });
          this.setState({ editLastName: results.lastName });
          this.setState({ editUsername: results.username });
          this.setState({ editPassword: results.password });
          console.log("hi", results.id);
          // this.setState({ userData: results });
        })
        // .then(() => {
        //   if (this.state.userData !== null) {
        //     console.log("userData:", this.state.userData);
        //   }
        // })
        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${APIURL}/user/`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.editId,
        firstName: this.state.editFirstName,
        lastName: this.state.editLastName,
        username: this.state.editUsername,
        password: this.state.editPassword,
        admin: this.state.editAdmin,
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
  };

  handleDelete = (id: number | undefined) => {
    if (this.props.sessionToken) {
      fetch(`${APIURL}/user/${this.state.editId}`, {
        // fetch(`${APIURL}/user/${this.state.editId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => {
          this.fetchUser();
          this.props.clearUser();
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
        <h3 id="editUserHeading">Edit an Account</h3>
        <FormControl>
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            value={this.state.editFirstName}
            onChange={(e) => {
              this.setState({ editFirstName: e.target.value });
              // {
              //   console.log(this.state.editFirstName);
              // }
            }}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            value={this.state.editLastName}
            onChange={(e) => {
              this.setState({ editLastName: e.target.value });
            }}
          />
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            value={this.state.editUsername}
            onChange={(e) => {
              this.setState({ editUsername: e.target.value });
            }}
          />
          <TextField
            label="New Password"
            variant="outlined"
            type="text"
            // value={this.state.editPassword}
            onChange={(e) => {
              this.setState({ editPassword: e.target.value });
            }}
          />
          <TextField
            label="Is Admin?"
            variant="outlined"
            type="text"
            value={this.state.editAdmin}
            onChange={(e) => {
              this.setState({ editAdmin: e.target.value });
            }}
          />

          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.handleSubmit(e);
                console.log(`
                id: ${this.state.editId},
                firstName: ${this.state.editFirstName},
                  lastName: ${this.state.editLastName},
                  username: ${this.state.editUsername},
                  admin: ${this.state.editAdmin},     
                  `);
              }}
            >
              <EditIcon />
              Edit
            </Button>
            <Button
              variant="outlined"
              color="primary"
              value={this.state.editId}
              onClick={(e) => {
                // console.log(this.state.editId);
                this.handleDelete(this.state.editId);
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
export default UserEdit;