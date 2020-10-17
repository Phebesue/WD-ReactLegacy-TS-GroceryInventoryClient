import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

type AcceptedProps = {};

const AdminVendorMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/vendorCreate">
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "4rem", width: "10rem", margin: "2rem" }}
        >
          Add a Vendor
        </Button>
      </Link>
      <br />
      <Link to="/admin/vendorList">
        <Button
          variant="contained"
          color="primary"
          style={{ height: "4rem", width: "10rem" }}
        >
          View All Vendors
        </Button>
      </Link>
    </div>
  );
};
export default AdminVendorMgmt;
