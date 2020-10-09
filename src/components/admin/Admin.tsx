import React, { Component } from "react";
import LocationCreate from "../locations/LocationCreate";
import LocationTable from "../locations/LocationTable";
import VendorCreate from "../vendors/VendorCreate";
import VendorTable from "../vendors/VendorTable";
import AdminUserTable from "../admin/AdminUserTable";
import { Button } from "@material-ui/core";
// import "./Admin.css";
import APIURL from "../../helpers/environment";
// import Radium from 'radium';

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

export class Admin extends Component<AdminProps, {}> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="adminDiv">
        <div id="adminContainer">
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <h3>Welcome {this.props.username}</h3>
            <h5> What would you like to manage?</h5>
          </div>
          <div
            style={{ display: "flex", justifyContent: "spaceBetween" }}
            className="options"
          >
            <Button
              style={{
                backgroundColor: "lightgrey",
                margin: "3em",
                color: "#5F9EA0",
                fontFamily: "cursive",
                borderColor: "#5F9EA0",
              }} 
            >
              Vendors
            </Button>
            <Button
              style={{
                backgroundColor: "lightgrey",
                margin: "3em",
                color: "#5F9EA0",
                fontFamily: "cursive",
                borderColor: "#5F9EA0",
              }} 
            >
              Locations
            </Button>
            <Button
              style={{
                backgroundColor: "lightgrey",
                margin: "3em",
                color: "#5F9EA0",
                fontFamily: "cursive",
                borderColor: "#5F9EA0",
              }}
            >
              Users
            </Button>
            <Button
              style={{
                backgroundColor: "lightgrey",
                margin: "3em",
                color: "#5F9EA0",
                fontFamily: "cursive",
                borderColor: "#5F9EA0",
              }} /*onClick={this.props.clearUser}*/
            >
              Grocery Items
            </Button>
          </div>
        </div>

        {console.log("Admin Footer")}

        <AdminUserTable
          updateSessionToken={this.props.updateSessionToken}
          sessionToken={this.props.sessionToken}
          updateUsername={this.props.updateUsername}
          updateUserRole={this.props.updateUserRole}
        />

        <LocationCreate
          updateSessionToken={this.props.updateSessionToken}
          sessionToken={this.props.sessionToken}
          updateUsername={this.props.updateUsername}
          updateUserRole={this.props.updateUserRole}
        />
          <LocationTable
          updateSessionToken={this.props.updateSessionToken}
          sessionToken={this.props.sessionToken}
          updateUsername={this.props.updateUsername}
          updateUserRole={this.props.updateUserRole}          
        />

        <VendorCreate
          updateSessionToken={this.props.updateSessionToken}
          sessionToken={this.props.sessionToken}
          updateUsername={this.props.updateUsername}
          updateUserRole={this.props.updateUserRole}
        />
              <VendorTable
          updateSessionToken={this.props.updateSessionToken}
          sessionToken={this.props.sessionToken}
          updateUsername={this.props.updateUsername}
          updateUserRole={this.props.updateUserRole}          
        />
      </div>
    );
  }
}

export default Admin;
