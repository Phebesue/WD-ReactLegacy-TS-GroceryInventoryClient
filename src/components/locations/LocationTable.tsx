import React, { Component } from 'react';
import { ColDef} from "@material-ui/data-grid";
import APIURL from "../../helpers/environment";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Radium from 'radium';
import Paper from '@material-ui/core/Paper';



type AcceptedProps = {
    updateUsername: (newUsername: string) => void;
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    sessionToken: string | null;
    // username: string | null | undefined;
  };
  
interface Results {
    id: number;
    locationName: string;
    room: string;
    place: string;
    type: string;
    locationNotes: string;  
  }
  type LocationDataState = {
    locationData: Results[];
    results: Results;
    columns: ColDef[];
  };
  const styles = {
    table: {
      minWidth: 650,
    },
  };

  export default class LocationTable extends Component<AcceptedProps, LocationDataState> {
    constructor(props: AcceptedProps) {
      super(props);
    //   console.log(props),
      this.state = {
        locationData: [],
        results:{
          id:0,
          locationName: "",
          room: "",
          place: "",
          type: "",
          locationNotes: ""        
      },
      columns: [
        { field: "id", headerName: "Id", type: "number", width: 70 },
        { field: "locationName", headerName: "Location Name", width: 130 },
        { field: "room", headerName: "Room", width: 130 },
        { field: "place", headerName: "Place", width: 130 },
        { field: "type", headerName: "Type", width: 130 },
        { field: "locationNotes", headerName: "Location Notes",  width: 130 },
      ],
    }
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
        .then((data: Results[]) => {
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
    return this.state.locationData.map((locations: Results, index) => {
      return (
       
        <TableRow key={index}>
        <TableCell component="th" scope="row"> {locations.id} </TableCell>
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
            <Table style={styles.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>id</TableCell>
                        <TableCell align='right'>Location Name</TableCell>
                        <TableCell align='right'>Room</TableCell>
                        <TableCell align='right'>Place</TableCell>
                        <TableCell align='right'>Type</TableCell>
                        <TableCell align='right'>Location Notes</TableCell>                              
                    </TableRow>
                </TableHead>
                <TableBody>                           
                    {this.locationMapper()}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
  }
}