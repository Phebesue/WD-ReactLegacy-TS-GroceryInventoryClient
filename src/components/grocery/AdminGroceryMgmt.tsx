import React, { FC } from "react";
import GroceryCreate from "../grocery/GroceryCreate";
import GroceryEdit from "../grocery/GroceryEdit";
import {Link} from 'react-router-dom';

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};

const AdminGroceryMgmt: FC<AcceptedProps> = (props) => {
  return (
    <div>
      <button style={{ margin: "2rem" }}>
      <Link to="/admin/groceryCreate">Grocery Create</Link>
      </button>
      <br />
      <button style={{ margin: "2rem" }}>
        <Link to="/admin/GroceryList">View All Groceries</Link>
      </button>
    </div>
  );
};
export default AdminGroceryMgmt;
