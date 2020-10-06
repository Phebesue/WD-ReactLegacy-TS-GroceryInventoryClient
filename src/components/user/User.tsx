import React, {FunctionComponent} from 'react';
import Navbar from '../../site/Navbar'


type AcceptedProps = {
  updateToken: any;
  updateUserName: any;
  clearToken: any;
  username: any;
  sessionToken: any;
};
const User: FunctionComponent<AcceptedProps> = (props) => {

    return (
        <div>
            {/* <Navbar /> */}
        </div>
    )
}
export default User;
