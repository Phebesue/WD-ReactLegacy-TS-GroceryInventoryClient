import React, {Component} from 'react';
// import Navbar from '../../site/Navbar'
import { Button } from "@material-ui/core";




type AcceptedProps = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    updateUsername: (newUsername: string) => void;
  sessionToken: any;
  username: string | null |undefined;
};
export class User extends Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
        <div>
          <h3>Welcome {this.props.username}</h3>
    <div className="options">
    <Button style={{ backgroundColor: "lightgrey",margin:"3em", color: "#5F9EA0", fontFamily: "cursive", borderColor:"#5F9EA0"}}/*onClick={this.props.clearUser}*/>View Vendors</Button>
   <Button style={{ backgroundColor: "lightgrey",margin:"3em", color: "#5F9EA0", fontFamily: "cursive", borderColor:"#5F9EA0"}}/*onClick={this.props.clearUser}*/>View Locations</Button>
   <Button style={{ backgroundColor: "lightgrey",margin:"3em", color: "#5F9EA0", fontFamily: "cursive", borderColor:"#5F9EA0"}}/*onClick={this.props.clearUser}*/>View / Edit your Account</Button>
      <Button style={{ backgroundColor: "lightgrey",margin:"3em", color: "#5F9EA0", fontFamily: "cursive", borderColor:"#5F9EA0"}}/*onClick={this.props.clearUser}*/>View / Edit Grocery Items</Button>
      <Button style={{backgroundColor: "lightgrey", margin:"3em", color: "#5F9EA0", fontFamily: "cursive", borderColor:"#5F9EA0"}} /*onClick={this.props.clearUser}*/>Add Grocery Items</Button>
{console.log("User Footer")}
<br />
    </div>
        </div>
    )
}
}
export default User;
