import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

type AcceptedProps = {};

const AdminGroceryMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/groceryCreate">
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "4rem", margin: "2rem" }}
        >
          Create a new Grocery Item
        </Button>
      </Link>
      <br />
      <Link to="/admin/GroceryList">
        <Button
          variant="contained"
          color="primary"
          style={{ height: "4rem", width: "10rem" }}
        >
          Grocery List
        </Button>
      </Link>
    </div>
  );
};
export default AdminGroceryMgmt;
