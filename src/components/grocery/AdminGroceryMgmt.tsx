import React, { FC } from 'react'
import GroceryCreate from '../grocery/GroceryCreate';
import GroceryEdit from '../grocery/GroceryEdit';


type AcceptedProps = {
    // clearUser: () => void;
    updateUsername: (newUsername: string) => void;
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    sessionToken: string | null;
    username: string | null | undefined;
  };

const AdminGroceryMgmt: FC<AcceptedProps> = (props) => {
    return (
        <div>

        </div>
    )
}
    export default AdminGroceryMgmt;