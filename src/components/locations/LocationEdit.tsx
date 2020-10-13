import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LocationDetails } from "../../Interfaces";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  locationProps:any;
};

type LocationDataState = {
  locationData: LocationDetails[];
  results: LocationDetails;
  locationId: number;
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
      locationId: 0,
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
  }
  fetchLocation = () => {
    if (this.props.sessionToken) {
      console.log("Before LocationEdit Fetch");
      fetch(`${APIURL}/location/:id`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data: LocationDetails[]) => {
          this.setState({ locationData: data });
        })
        .then(() => {
          if (this.state.locationData !== null) {
            console.log(this.state.locationData);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    console.log("Before LocationEdit Fetch");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/user/`, {
        method: "PUT",
        body: JSON.stringify({
          locationId: this.state.results.id,
          locationName: this.state.results.locationName,
          room: this.state.results.room,
          place: this.state.results.place,
          type: this.state.results.type,
          locationNotes: this.state.results.locationNotes,
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
        fetch(`${APIURL}/user/${this.props.locationProps}`, {
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
          <FormControl  style={{backgroundColor:"#FFFFFF"}}>
            <TextField
              label="Location Name"
              variant="outlined"
              type="text"
              value={this.state.results.locationName}
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
                <Link to="/admin/locationList"> Update a Location</Link>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                value={this.state.locationId}
                onClick={(e) => {
                  // console.log(this.state.editId);
                  this.handleDelete(this.state.locationId);   
              
                }}
              >
                <DeleteIcon />
                       <Link to="/home">Delete</Link>
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}
export default LocationEdit;
