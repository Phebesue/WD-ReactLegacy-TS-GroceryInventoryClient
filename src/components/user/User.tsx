import React, {Component} from 'react';
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


        </div>
    )
}
}
export default User;
