import React, { Component } from 'react'
import { FormControl, TextField, Button } from "@material-ui/core";
// import './Location.css';
import APIURL from "../../helpers/environment";
import { EnumDeclaration } from 'typescript';


type AcceptedProps = {
    updateUsername: (newUsername: string) => void;
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    sessionToken: string | null;
    username: string | null | undefined;
  };
  type LocationState = {
    locationName: string;
    room: string;
    place: string;
    type: string;
    locationNotes: string;
    userId: number;
  };
//   enum Type {
//     Circle,
//     Square
//   }

export default class LocationCreate extends Component <AcceptedProps, LocationState> {


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
