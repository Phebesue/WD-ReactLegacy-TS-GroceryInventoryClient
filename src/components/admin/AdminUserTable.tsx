import React, {FunctionComponent} from 'react';
// import Navbar from '../../site/Navbar'
import Footer from "../../site/Footer";



type AcceptedProps = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    updateUsername: (newUsername: string) => void;
  sessionToken: any;
};
const User: FunctionComponent<AcceptedProps> = (props) => {

    return (
        <div>
          <h3>Welcome User!</h3>
          <Footer />
        </div>
    )
}
export default User;
