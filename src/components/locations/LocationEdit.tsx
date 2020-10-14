import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LocationDetails } from "../../Interfaces";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from "@material-ui/icons/Edit";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  locationId:number;
};

type LocationDataState = {
  locationData: LocationDetails[];
  results: LocationDetails;
  locatId: number;
  locationName: string;
  room: string;
  place: string;
  type: string;
  locationNotes: string;
};

const types = ["", "dry", "frozen", "refrigerated"]

export class LocationEdit extends Component<AcceptedProps, LocationDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      locatId: 0,
      locationName: "",
      room: "",
      place: "",
      type: "",
      locationNotes: "",
      locationData: [
        {
          id: 0,
          locationName: "",
          room: "",
          place: "",
          type: "",
          locationNotes: "",
        },
      ],

      results: {
        id: 0,
        locationName: "",
        room: "",
        place: "",
        type: "",
        locationNotes: "",
      },
    };
  }
  componentDidMount() {
    this.fetchLocation();
    console.log("LocEdit Props", this.props)
  }
  fetchLocation = () => {
    if (this.props.sessionToken) {
      console.log("Before LocationEdit Fetch");
      fetch(`${APIURL}/location/one/${this.props.locationId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          this.setState({ locatId: results.id });
          this.setState({ locationName: results.locationName });
          this.setState({ room: results.room });
          this.setState({ place: results.place });
          this.setState({ locationNotes: results.locationNotes });
          console.log("hi", results.id);
        })
      
        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    console.log("As LocationEdit Update");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/location/update/${this.props.locationId}`, {
        method: "PUT",
        body: JSON.stringify({
          // locatId: this.state.id,
          locationName: this.state.locationName,
          room: this.state.room,
          place: this.state.place,
          type: this.state.type,
          locationNotes: this.state.locationNotes,
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

  handleDelete = (id: number | undefined) => {
    if (this.props.sessionToken) {
        fetch(`${APIURL}/location/${this.props.locationId}`, {
      // fetch(`${APIURL}/user/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => {
          this.fetchLocation();
        })
        .catch((err) => alert(err));
    }
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="locationEditDiv">
          <h2 id="locationEditHeading">Edit a Location</h2>
          {/* {console.log(this.state.locationName)} */}
          <FormControl  style={{backgroundColor:"#FFFFFF"}}>
            <TextField
              label="Location Name"
              variant="outlined"
              type="text"
              value={this.state.locationName}
              onChange={(e) => {
                this.setState({ locationName: e.target.value });
              }}
            />

            <TextField
              label="Room"
              variant="outlined"
              type="text"
              value={this.state.room}
              onChange={(e) => {
                this.setState({ room: e.target.value });
              }}
            />
            <TextField
              label="Place"
              variant="outlined"
              type="text"
              value={this.state.place}
              onChange={(e) => {
                this.setState({ place: e.target.value });
              }}
            />

            <TextField
              id="outlined-textarea"
              label="Location Notes"
              type="text"
              value={this.state.locationNotes}
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ locationNotes: e.target.value });
              }}
            />

            <TextField
              id="outlined-select-types"
              select
              label="Type"
              value={this.state.type}
              helperText="Please select your type"
              variant="outlined"
              onChange={this.handleChange}
            >
              {types.map((option) => (
                <MenuItem key={option[0]} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <div>
              <Button
                variant="contained"
                onClick={(e) => {
                  this.handleSubmit(e);
                }}
              >
                {/* Update a Location */}
                <EditIcon />
                <Link to="/admin/locationList"> Update a Location</Link>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                value={this.state.locatId}
                onClick={(e) => {
                  // console.log(this.state.id);
                  this.handleDelete(this.state.locatId);               
                }}
              >
                <DeleteIcon />
                <Link to="/admin/locationList"> Delete Location</Link>
              </Button>
             
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}
export default LocationEdit;
