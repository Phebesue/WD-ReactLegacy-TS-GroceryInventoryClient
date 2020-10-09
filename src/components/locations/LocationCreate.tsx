import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
// import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// // import Radium from 'radium';
// import Paper from '@material-ui/core/Paper';
// // import './Location.css';
// import { EnumDeclaration } from 'typescript';

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  //   username: string | null | undefined;
};
type LocationState = {
  locationName: string;
  room: string;
  place: string;
  type: string;
  locationNotes: string;
  userId: number;
  // locData: Results[];
  // results:Results;
  // columns: ColDef[];
};
//   interface Results {
//     locationName: string;
//     room: string;
//     place: string;
//     type: string;
//     locationNotes: string;
//     userId: number;
//   }
const types = [
  {
    value: "",
    label: "",
  },
  {
    value: "dry",
    label: "dry",
  },
  {
    value: "frozen",
    label: "frozen",
  },
  {
    value: "refrigerated",
    label: "refrigerated",
  },
];

export default class LocationCreate extends Component<
  AcceptedProps,  LocationState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      locationName: "",
      room: "",
      place: "",
      type: "",
      locationNotes: "",
      userId: 0,
    };
  }

  handleSubmit = (event: any) => {
    if (this.props.sessionToken) {
      console.log("Before LocationCreate Fetch");
      event.preventDefault();
      fetch(`${APIURL}/location/create`, {
        method: "POST",
        body: JSON.stringify({
          location: {
            locationName: this.state.locationName,
            room: this.state.room,
            place: this.state.place,
            type: this.state.type,
            locationNotes: this.state.locationNotes,
            userId: this.state.userId,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);   
        })
        .catch((err) => console.log(err));
    }
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="locationCreateDiv">
          <h2 id="locationHeading">Add a Location</h2>
          <FormControl>
            <TextField
              label="Location Name"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ locationName: e.target.value });
              }}
            />

            <TextField
              label="Room"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ room: e.target.value });
              }}
            />
            <TextField
              label="Place"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ place: e.target.value });
              }}
            />

            {/* <TextField
              label="Type"
              variant="outlined"
              onChange={(e) => {
                this.setState({ type: e.target.value });
              }}
            /> */}
            <TextField
              id="outlined-textarea"
              label="Location Notes"
              //   placeholder="Location Notes"
              type="text"
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ locationNotes: e.target.value });
              }}
            />

            {/* <TextField
          id="filled-select-types-native"
          select
          label="Native select"
          value={types}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your type"
          variant="filled"
        >
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField> */}
            <TextField
              id="outlined-select-types"
              select
              label="Type"
              value={types}
              helperText="Please select your type"
              variant="outlined"
              onChange={this.handleChange}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              Add a Location
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}
