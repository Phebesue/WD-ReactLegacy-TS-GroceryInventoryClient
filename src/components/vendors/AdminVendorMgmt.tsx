import React, { FC } from "react";
import { Button } from "@material-ui/core";
import VendorCreate from "../vendors/VendorCreate";
import VendorTable from "../vendors/VendorTable";
import VendorEdit from "../vendors/VendorEdit";
import Admin from "../../components/admin/Admin"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";


type AcceptedProps = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    updateUsername: (newUsername: string) => void;
    sessionToken: string | null;
};

const AdminVendorMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
       <button style={{ margin: "2rem" }}>
       <Link to="/admin/vendorCreate">Add a Vendor</Link>
      </button>
      <br />
      <button style={{ margin: "2rem" }}>
             <Link to="/admin/vendorList">View All Vendors</Link>
      </button>
    
    </div>
  );
};
export default AdminVendorMgmt;
