import React, { Component } from "react";
// import "./Admin.css";

type AdminProps = {
  // updateSessionToken: (newToken: string) => void;
  // updateUserRole: (newUserRole: string) => void;
  // updateUsername: (newUsername: string) => void;
  // sessionToken: string | null;
  // username: string | null | undefined;
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
          <div>
            <div style={{ width: "50%", display: "block" }}>
              <h5> Admin user functionality: </h5>
              <ul>
                <li>Pull a list of all registered users and delete users</li>
                <li>Add, edit & delete vendors</li>
                <li>Add, edit & delete locations available to track on hand</li>
                <li>Edit & delete users</li>
                <li>Delete grocery items</li>
              </ul>
            </div>
          </div>
        </div>
        {console.log("Admin Footer")}
      </div>
    );
  }
}

export default Admin;
