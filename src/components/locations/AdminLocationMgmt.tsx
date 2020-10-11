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
      <button style={{ margin: "2rem" }}>
        <Link to="/admin/locationCreate">Create a new Location</Link>
      </button>
      <br />
      <button style={{ margin: "2rem" }}>
        <Link to="/admin/locationList">Location List</Link>
      </button>
    </div>
  );
};
export default AdminLocationMgmt;
