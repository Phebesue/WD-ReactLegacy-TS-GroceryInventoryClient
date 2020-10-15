import React, { FC } from "react";
import { Link } from "react-router-dom";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};

const AdminGroceryMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <Link to="/admin/groceryCreate">
        <button style={{ margin: "2rem" }}>Create a new Grocery Item</button>
      </Link>
      <br />
      <Link to="/admin/GroceryList">
        <button style={{ margin: "2rem" }}>Grocery List</button>
      </Link>
    </div>
  );
};
export default AdminGroceryMgmt;
