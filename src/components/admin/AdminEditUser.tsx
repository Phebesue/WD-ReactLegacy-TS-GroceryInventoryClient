import React, { Component } from "react";
import AdminUserTable from "../admin/AdminUserTable";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

type AdminProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};
const styles = {
  table: {
    minWidth: 650,
  },
};

export default class AdminEditUser extends Component<AdminProps, {}> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to="/admin/userMgmt">User Management</Link>
        <Link to="/admin/userTable">User Table</Link>


        <Switch>
        <Route exact path="/admin/userMgmt">
            <AdminEditUser   updateSessionToken={this.props.updateSessionToken}
              updateUsername={this.props.updateUsername}
              updateUserRole={this.props.updateUserRole}
              sessionToken={this.props.sessionToken}
              username={this.props.username}/>
          </Route>
      
          <Route exact path="/admin/userTable">
            <AdminUserTable   updateSessionToken={this.props.updateSessionToken}
              updateUsername={this.props.updateUsername}
              updateUserRole={this.props.updateUserRole}
              sessionToken={this.props.sessionToken}
              // username={props.username}
              />
          </Route>

        </Switch>
      </div>
    );
  }
}
