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
      <button style={{ margin: "2rem" }}>
        <Link to="/admin/groceryCreate">Create a new Grocery Item</Link>
      </button>
      <br />
      <button style={{ margin: "2rem" }}>
        <Link to="/admin/GroceryList">Grocery List</Link>
      </button>
    </div>
  );
};
export default AdminGroceryMgmt;
