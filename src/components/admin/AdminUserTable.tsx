import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import BrightnessAutoIcon from "@material-ui/icons/BrightnessAuto";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { UserDetails } from "../../Interfaces";

// import Radium from 'radium';

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
};
// interface UserDetails {
//   id: number;
//   firstName: string;
//   lastName: string;
//   username: string;
//   admin: string;
// }
type UserDataState = {
  userData: UserDetails[];
  results: UserDetails;
};
const styles = {
  table: {
    minWidth: 650,
  },
};

export class AdminUserTable extends Component<AcceptedProps, UserDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    // console.log(props),
    this.state = {
      userData: [],
      results: {
        id: 0,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        admin: "false",
      },
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    if (this.props.sessionToken) {
      console.log("Before Admin User Table Fetch");
      fetch(`${APIURL}/user/all`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data: UserDetails[]) => {
          // console.log(userData);
          this.setState({ userData: data });
        })
        .then(() => {
          if (this.state.userData !== null) {
            console.log(this.state.userData);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  deleteUser = (user: any) => {
    fetch(`${APIURL}/user/${user.this.state.results.id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    }).then(() => this.fetchUsers());
  };

  userMapper = () => {
    return this.state.userData.map((users: UserDetails, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {users.id}
          </TableCell>
          <TableCell align="right">{users.firstName}</TableCell>
          <TableCell align="right">{users.lastName}</TableCell>
          <TableCell align="right">{users.username}</TableCell>
          <TableCell align="right">{users.admin}</TableCell>
          <Button id="deleteMe" variant="contained" onClick={() => {}}>
            <BrightnessAutoIcon />
          </Button>
          <Button
            id="editUser"
            variant="contained"
            color="primary" /*onClick={()=> {this.props.AdminEditUser(user); this.props.updateOn()}}*/
          >           
            <Link to="/admin/edit">            
              <EditIcon />
            </Link>
            {/* Update */}
          </Button>
          <Button
            id="deleteMe"
            variant="contained"
            color="secondary"
            onClick={() => {
              this.deleteUser(users);
            }}
          >
            <DeleteIcon />
            {/* Delete User */}
          </Button>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>User Table</h3>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Admin?</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{this.userMapper()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default AdminUserTable;

{
  /* <Link to="/admin/edit">Edit an Acct</Link> */
}
