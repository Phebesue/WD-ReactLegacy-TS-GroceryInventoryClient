import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

type AcceptedProps = {};

const AdminLocationMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/locationCreate">
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "4rem", margin: "2rem" }}
        >
          Create a new Location
        </Button>
      </Link>
      <br />
      <Link to="/admin/locationList">
        <Button
          variant="contained"
          color="primary"
          style={{ height: "4rem", width: "10rem" }}
        >
          Location List
        </Button>
      </Link>
    </div>
  );
};
export default AdminLocationMgmt;
