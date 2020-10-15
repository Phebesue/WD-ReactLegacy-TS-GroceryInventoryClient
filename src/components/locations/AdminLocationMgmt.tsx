import React, { FC } from "react";
import { Link } from "react-router-dom";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};

const AdminLocationMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/locationCreate">
        <button style={{ margin: "2rem" }}>Create a new Location</button>
      </Link>
      <br />
      <Link to="/admin/locationList">
        <button style={{ margin: "2rem" }}>Location List</button>
      </Link>
    </div>
  );
};
export default AdminLocationMgmt;
