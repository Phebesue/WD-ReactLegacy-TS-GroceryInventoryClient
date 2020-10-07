import React from "react";
// import AdminNavbar from '../admin/AdminNavbar';
import Footer from "../../site/Footer";
// import { Container, Button } from 'reactstrap';
// import { Card } from 'antd';
// import "./Admin.css";
import APIURL from "../../helpers/environment";

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: boolean) => void;
  updateUsername: (newUsername: string) => void;
  // clearUser: () => void;
  sessionToken: any;
};

type ValueTypes = {
  dataTable: [];
};

export class Admin extends React.Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      dataTable: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    if (this.props.sessionToken) {
      console.log("Before Fetch");
      fetch(`${APIURL}/users/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Error");
          } else return res.json();
        })
        .then((data) => {
          // let objUser: UserDetails = {
          //   id: 0,
          //     firstName: "",
          //     lastName: "",
          //     userName: "",
          //     role: "",
          // }
        });
    }
  };

  deleteUser = (user: any) => {
    fetch(`${APIURL}/user/${user.id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    }).then(() => this.fetchUsers());
  };

  userMapper = () => {
    return this.state.dataTable.map((users: any, index) => {
      return (
        //call mapper and display

        <div key={index} id="userlist">
          <p id="listUserName">Username: {users.userName}</p>
          <button
            id="deleteMe"
            // variant="contained"
            color="primary"
            onClick={() => {
              this.deleteUser(users);
            }}
          >
            Delete User
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div id="adminDiv">
        <div id="adminContainer">
          <header id="titleUserList">User List:</header>
          {this.userMapper()}
        </div>
        <Footer />
      </div>
    );
  }
}
