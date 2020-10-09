import React, { FC } from 'react'
import LocationCreate from '../locations/LocationCreate';
import LocationTable from '../locations/LocationTable';
import LocationEdit from '../locations/LocationEdit';


type AcceptedProps = {
    updateUsername: (newUsername: string) => void;
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    sessionToken: string | null;
  };

const AdminLocationMgmt: FC<AcceptedProps> = (props) => {
    return (
        <div>

        </div>
    )
}
    export default AdminLocationMgmt;