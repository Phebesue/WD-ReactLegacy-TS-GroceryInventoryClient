import React, { FC } from "react";

import LocationCreate from "../locations/LocationCreate";
import LocationTable from "../locations/LocationTable";
import LocationEdit from "../locations/LocationEdit";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};

const AdminLocationMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      {/* <Button style={{ marginRight: "5em" }}>
        <Link to="/admin/locationCreate">Create a new Location</Link>
      </Button>
      <Button
        style={{ marginLeft: "5em" }}>    
        <Link to="/admin/locationList">View All Locations</Link>
      </Button> */}

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
