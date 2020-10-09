import React, { FC } from "react";
import { Button } from "@material-ui/core";
import VendorCreate from "../vendors/VendorCreate";
import VendorTable from "../vendors/VendorTable";
import VendorEdit from "../vendors/VendorEdit";
import Admin from "../../components/admin/Admin";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
};

const AdminVendorMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "lightgrey",
          margin: "3em",
          color: "#5F9EA0",
          fontFamily: "cursive",
          borderColor: "#5F9EA0",
        }} 
      >
        Add a Vendor
      </Button>
    </div>
  );
};
export default AdminVendorMgmt;
