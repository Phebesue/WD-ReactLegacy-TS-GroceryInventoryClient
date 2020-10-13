import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  //   username: string | null | undefined;
};
type LocationState = {
  locationId: number;
  locationName: string;
  room: string;
  place: string;
  type: string;
  locationNotes: string;
};

const types = ["", "dry", "frozen", "refrigerated"]
//   {
//     value: "",
//     label: "",
//   },
//   {
//     value: "dry",
//     label: "dry",
//   },
//   {
//     value: "frozen",
//     label: "frozen",
//   },
//   {
//     value: "refrigerated",
//     label: "refrigerated",
//   },
// ];

export default class LocationCreate extends Component<
  AcceptedProps,
  LocationState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      locationId: 0,
      locationName: "",
      room: "",
      place: "",
      type: "",
      locationNotes: "",
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
            locationId: this.state.locationId,
            locationName: this.state.locationName,
            room: this.state.room,
            place: this.state.place,
            type: this.state.type,
            locationNotes: this.state.locationNotes,
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
  handleChange = (event: any) => {
    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="locationCreateDiv">
          <h2 id="locationHeading">Add a Location</h2>
          <FormControl style={{backgroundColor:"#FFFFFF"}}>
            <div>
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
            </div>
            <div>
              <TextField
                label="Place"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ place: e.target.value });
                }}
              />
                <FormControl className="typeInput">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Storage Type
                </InputLabel>
                <Select onChange={this.handleChange}>
                  {types.map((option) => (
                    <MenuItem key={option[0]} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Storage Type</FormHelperText>
              </FormControl>
            </div>
            <TextField
              id="outlined-textarea"
              label="Location Notes"
              type="text"
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ locationNotes: e.target.value });
              }}
            />
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
