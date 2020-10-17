import React, { Component } from "react";
import { Button } from "@material-ui/core";
import APIURL from "../../helpers/environment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { UserDetails } from "../../Interfaces";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

type AcceptedProps = {
  clearUser: () => void;
  sessionToken: any;
};
type UserDataState = {
  editId: number;
  editFirstName: string;
  editLastName: string;
  editUsername: string;
  editPassword: string;
  userData: UserDetails[];
  results: UserDetails;
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
      userData: [],
      results: {
        id: 0,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        admin: "",
      },
    };
    console.log("UserEdit: ", this.props.sessionToken);
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
          console.log("UserEdit Fetch", results.id);
        })

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
        //  password: this.state.editPassword,
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
  handleSubmitPassword = (event: any) => {
    event.preventDefault();

    fetch(`${APIURL}/user/`, {
      method: "PUT",
      body: JSON.stringify({
        password: this.state.editPassword,
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
  handleDelete = (id: number) => {
    if (this.props.sessionToken) {
      fetch(`${APIURL}/user/${id}`, {
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

  handleFirstNameChange = (event: any) => {
    const firstName = event.target.value;
    this.setState({ editFirstName: firstName });
  };
  handleLastNameChange = (event: any) => {
    const lastName = event.target.value;
    this.setState({ editLastName: lastName });
  };
  handleUsernameChange = (event: any) => {
    const username = event.target.value;
    this.setState({ editUsername: username });
  };

  componentDidMount() {
    this.fetchUser();
    // console.log(data)
  }
  render() {
    return (
      <div id="editUserDiv">
        <h3 id="editUserHeading">Edit your account</h3>
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
            value={this.state.editFirstName}
            validators={["required"]}
            errorMessages={["this field is required"]}
            autoComplete="off"
          />
          <TextValidator
            label="Last Name"
            onChange={(e) => this.handleLastNameChange(e)}
            name="Last Name"
            value={this.state.editLastName}
            validators={["required"]}
            errorMessages={["this field is required"]}
            autoComplete="off"
          />
          <TextValidator
            label="Username"
            onChange={(e) => this.handleUsernameChange(e)}
            name="Username"
            value={this.state.editUsername}
            validators={["minStringLength:6", "required"]}
            errorMessages={[
              "Username should be more than 6 letters",
              "this field is required",
            ]}
            autoComplete="off"
          />

          <br />
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
                  password: ${this.state.editPassword}            
                  `);
              }}
            >
              <Link style={{ color: "#000000" }} to="/user/home">
                <EditIcon />
                Edit
              </Link>
            </Button>
            <Link to="/home">
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
                Delete
              </Button>
            </Link>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default UserEdit;
