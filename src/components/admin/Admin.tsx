import React from "react";
// import Navbar from '../Navbar/NavBar';
import Footer from "../../site/Footer";
// import { Container, Button } from 'reactstrap';
// import { Card } from 'antd';
// import "./Admin.css";
import APIURL from "../../helpers/environment";
//import IconButton from '@material-ui/core/IconButton';
//import DeleteTwoToneIcon from '@material-ui/icons/';

type AcceptedProps = {
  setUsername: string | any;
  sessionToken: any;
  updateUserRole: any;
 
};

type ValueTypes = {
  username: string | any;
  dataTable: []
};

export class Admin extends React.Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      username: "",
      dataTable: []
    };
  }
  fetchUsers = () => {
    console.log("User" + this.state.username);
    fetch(`${APIURL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: this.props.token
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log("user data ", userData);
        this.setState({
          dataTable: userData.user,
        });
        console.log("USERS", this.state.dataTable);
      });
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
        //call mapper and use jsx to display

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

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div id="feedDiv">
        <div id="userContainer">
          <header id="titleUserList">User List:</header>
          {this.userMapper()}
        </div>
        <Footer />
      </div>
    );
  }
}
