import React, { Component } from "react";

type AcceptedProps = {};
export class User extends Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div style={{ width: "50%", display: "block" }}>
        <h5> User functionality: </h5>
        <ul>
          <li>Create an acct, login and edit registration</li>
          <li>Pull vendor list</li>
          <li>Pull location list</li>
          <li>Add , edit, and pull list of grocery Items</li>
        </ul>
      </div>
    );
  }
}
export default User;
