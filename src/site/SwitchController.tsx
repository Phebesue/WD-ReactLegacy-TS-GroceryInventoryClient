import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Admin } from "../components/admin/Admin";
import UserEdit from "../components/user/UserEdit";
import User from "../components/user/User";
import AdminUserTable from "../components/admin/AdminUserTable";
import AdminEditUser from "../components/admin/AdminEditUser";
import GroceryCreate from "../components/grocery/GroceryCreate";
import GroceryTable from "../components/grocery/GroceryTable";
import GroceryEdit from "../components/grocery/GroceryEdit";
import AdminGroceryTblDel from "../components/grocery/AdminGroceryTblDel";
import AdminGroceryMgmt from "../components/grocery/AdminGroceryMgmt";
import LocationCreate from "../components/locations/LocationCreate";
import LocationTable from "../components/locations/LocationTable";
import LocationEdit from "../components/locations/LocationEdit";
import AdminLocationMgmt from "../components/locations/AdminLocationMgmt";
import AdminLocationTblDel from "../components/locations/AdminLocationTblDel";
import VendorCreate from "../components/vendors/VendorCreate";
import VendorTable from "../components/vendors/VendorTable";
import AdminVendorTblDel from "../components/vendors/AdminVendorTblDel";
import AdminGroceryEdit from '../components/grocery/AdminGroceryEdit'
import VendorEdit from "../components/vendors/VendorEdit";
import AdminVendorMgmt from "../components/vendors/AdminVendorMgmt";
import Auth from "../auth/Auth";
import UserGroceryMgmt from '../components/grocery/UserGroceryMgmt'

type controllerState = {};
type ControllerProps = {
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  updateUsername: (newUsername: string) => void;
  protectedViews: () => void;
  sessionToken: any;
  username: string | null | undefined;
  userRole: string;
  clearUser: () => void;
  locationId: number;
  vendorId: number;
  groceryId: number;
  userId: number;
  updateLocationId: (newLocationId: number) => void;
  updateVendorId: (newVendorId: number) => void;
  updateGroceryId: (newGroceryId: number) => void;
  updateUserId: (newUserId: number) => void;
};

const SwitchController: FC<ControllerProps> = (props) => {
  console.log("switchController: ", props.sessionToken);

  return (
    <div className="ViewsDiv">
      <div className="routes">
        <Switch>
          <Route exact path="/home"></Route>

          <Route exact path="/auth">
            <Auth
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
            />
          </Route>

          <Route exact path="/admin/home">
            <Admin
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              username={props.username}
            />
          </Route>
          <Route exact path="/admin/vendors">
            <AdminVendorMgmt
              updateUsername={props.updateUsername}
              updateSessionToken={props.updateSessionToken}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
            />
          </Route>
          <Route exact path="/admin/vendorList">
            <AdminVendorTblDel
              sessionToken={props.sessionToken}
              vendorId={props.vendorId}
              updateVendorId={props.updateVendorId}
            />
          </Route>
          <Route exact path="/admin/vendorCreate">
            <VendorCreate
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
            />
          </Route>

          <Route exact path="/admin/vendorEdit">
            <VendorEdit
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              vendorId={props.vendorId}
            />
          </Route>
          <Route exact path="/admin/locations">
            <AdminLocationMgmt
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              // username={props.username}
            />
          </Route>
          <Route exact path="/admin/locationCreate">
            <LocationCreate
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              // username={props.username}
            />
          </Route>
          <Route exact path="/admin/locationList">
            <AdminLocationTblDel
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              locationId={props.locationId}
              updateLocationId={props.updateLocationId}
            />
          </Route>
          <Route exact path="/admin/locationEdit">
            <LocationEdit
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              locationId={props.locationId}
            />
          </Route>
          <Route exact path="/admin/userMgmt">
            <AdminEditUser
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              username={props.username}
              userId={props.userId}
              updateUserId={props.updateUserId}
            />
          </Route>
          <Route exact path="/admin/userTable">
            <AdminUserTable
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              userId={props.userId}
              updateUserId={props.updateUserId}
            />
          </Route>
          <Route exact path="/admin/edit">
            <AdminEditUser
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              username={props.username}
              userId={props.userId}
              updateUserId={props.updateUserId}
            />
          </Route>
          <Route exact path="/admin/grocery">
            <AdminGroceryMgmt
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
            
            />
          </Route>
          <Route exact path="/admin/groceryCreate">
            <GroceryCreate
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              // username={props.username}
            />
          </Route>
          <Route exact path="/admin/groceryList">
            <AdminGroceryTblDel
              // updateSessionToken={props.updateSessionToken}
              // updateUsername={props.updateUsername}
              // updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              groceryId={props.groceryId}
              updateGroceryId={props.updateGroceryId}
            />
          </Route>
          <Route exact path="/admin/groceryEdit">
            <AdminGroceryEdit
              // updateSessionToken={props.updateSessionToken}
              // updateUsername={props.updateUsername}
              // updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              groceryId={props.groceryId}
              // updateGroceryId={props.updateGroceryId}
            />
          </Route>
          <Route exact path="/user/home">
            <User
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              username={props.username}
            />
          </Route>
          <Route exact path="/user/vendorList">
            <VendorTable
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
            />
          </Route>
          <Route exact path="/user/locationList">
            <LocationTable
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              // username={props.username}/
            />
          </Route>
          <Route exact path="/user/edit">
            <UserEdit
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              clearUser={props.clearUser}
              // username={props.username}
            />
          </Route>
          <Route exact path="/user/grocery">
            <UserGroceryMgmt
              // updateSessionToken={props.updateSessionToken}
              // updateUsername={props.updateUsername}
              // updateUserRole={props.updateUserRole}
              // username={props.username} 
              sessionToken={props.sessionToken}
              // groceryId={props.groceryId}
              // updateGroceryId={props.updateGroceryId}
            />
          </Route>
          <Route exact path="/user/groceryCreate">
            <GroceryCreate
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
         
            />
          </Route>
          <Route exact path="/user/groceryList">
            <GroceryTable
              // updateSessionToken={props.updateSessionToken}
              // updateUsername={props.updateUsername}
              // updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              groceryId={props.groceryId}
              updateGroceryId={props.updateGroceryId}
            /> </Route>
             <Route exact path="/user/groceryEdit">
            <GroceryEdit
              updateSessionToken={props.updateSessionToken}
              updateUsername={props.updateUsername}
              updateUserRole={props.updateUserRole}
              sessionToken={props.sessionToken}
              groceryId={props.groceryId}
              // updateGroceryId={props.updateGroceryId}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default SwitchController;
