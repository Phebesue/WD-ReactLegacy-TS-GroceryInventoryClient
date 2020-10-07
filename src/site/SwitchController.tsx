import React, { FC } from "react";
import { Switch, Route } from 'react-router-dom'
import {Admin} from "../components/admin/Admin"
import Auth from "../auth/Auth";
import User from "../components/user/User";


type controllerState = {

}
type ControllerProps = {
    // updateToken: (token: string, authenticated: boolean) => void
    // appState: { authenticated: boolean, token: string | null }
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: boolean) => void;
    updateUsername: (newUsername: string) => void;
}

const SwitchController: FC<ControllerProps> = (props) => {

    return (

            <div>
                <Switch>
                   

                </Switch>
            </div>
      )  
    }
    

export default SwitchController;
