import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import {Link} from "react-router-dom";

type AdminProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};
interface Results {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  admin: string;
}

type UserState = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin: string;
  userData?:[];
  results?: Results;
};

export default class AdminEditUser extends Component<AdminProps, UserState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      admin:"",
    };
  }
  // fetchUser = () => {
  //   if (this.props.sessionToken) {
  //     console.log("Before User Fetch");
  //     fetch(`${APIURL}/user/all`, {
  //       method: "GET",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: this.props.sessionToken,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data: Results[]) => {
  //         // console.log(userData);
  //         this.setState({ userData: data });
  //       })
  //       .then(() => {
  //         if (this.state.userData !== null) {
  //           console.log(this.state.userData);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };
  
  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${APIURL}/user/admin/:id`, {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        admin: this.state.admin,
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
      <div>
        <Link to="/admin/userMgmt">User Management</Link>
        <Link to="/admin/userTable">User Table</Link>


      
      </div>
    );
  }
}
