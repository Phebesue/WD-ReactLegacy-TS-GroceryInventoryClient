import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { LocationDetails } from "../../Interfaces";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

type AcceptedProps = {
  sessionToken: string | null;
};

type LocationDataState = {
  locationData: LocationDetails[];
  results: LocationDetails;
};
const styles = {
  table: {
    minWidth: 650,
  },
};

export default class LocationTable extends Component<
  AcceptedProps,
  LocationDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    //   console.log(props),
    this.state = {
      locationData: [],
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
    this.fetchLocations();
  }
  fetchLocations = () => {
    if (this.props.sessionToken) {
      console.log("Before UserTable Fetch");
      fetch(`${APIURL}/location/all`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data: LocationDetails[]) => {
          // console.log(locationData);
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

  locationMapper = () => {
    return this.state.locationData.map((locations: LocationDetails, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {locations.id}
          </TableCell>
          <TableCell align="right">{locations.locationName}</TableCell>
          <TableCell align="right">{locations.room}</TableCell>
          <TableCell align="right">{locations.place}</TableCell>
          <TableCell align="right">{locations.type}</TableCell>
          <TableCell align="right">{locations.locationNotes}</TableCell>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Location Table</h3>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">Location Name</TableCell>
                <TableCell align="right">Room</TableCell>
                <TableCell align="right">Place</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Location Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.locationMapper()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
