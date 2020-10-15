import React, { FC } from "react";
import { Link } from "react-router-dom";

type AcceptedProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  sessionToken: string | null;
};

const AdminVendorMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/vendorCreate">
        <button style={{ margin: "2rem" }}>Add a Vendor</button>
      </Link>
      <br />
      <Link to="/admin/vendorList">
        <button style={{ margin: "2rem" }}>View All Vendors</button>
      </Link>
    </div>
  );
};
export default AdminVendorMgmt;
