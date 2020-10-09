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
   };
  
interface Results {
    id: number;
    vendorName: string;
    website: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    vendorNotes: string;  
  }
  type VendorDataState = {
    vendorData: Results[];
    results: Results;
    columns: ColDef[];
  };
  const styles = {
    table: {
      minWidth: 650,
    },
  };

  export default class VendorTable extends Component<AcceptedProps, VendorDataState> {
    constructor(props: AcceptedProps) {
      super(props);
    //   console.log(props),
      this.state = {
        vendorData: [],
        results:{
          id:0,
          vendorName: "",
          website: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          vendorNotes: ""        
      },
      columns: [
        { field: "id", headerName: "Id", type: "number", width: 70 },
        { field: "vendorName", headerName: "Vendor Name", width: 130 },
        { field: "website", headerName: "Website", width: 130 },
        { field: "address", headerName: "Address", width: 130 },
        { field: "city", headerName: "City", width: 130 },
        { field: "state", headerName: "State", width: 130 },
        { field: "zipcode", headerName: "Zipcode", width: 130 },
        { field: "vendorNotes", headerName: "Vendor Notes",  width: 130 },
      ],
    }
}
componentDidMount() {
    this.fetchVendors();
  }
  fetchVendors = () => {
    if (this.props.sessionToken) {
      console.log("Before Vendor Fetch");
      fetch(`${APIURL}/vendor/all`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data: Results[]) => {
          // console.log(locationData);
          this.setState({ vendorData: data });
        })
        .then(() => {
          if (this.state.vendorData !== null) {
            console.log(this.state.vendorData);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  vendorMapper = () => {
    return this.state.vendorData.map((vendors: Results, index) => {
      return (
       
        <TableRow key={index}>
        <TableCell component="th" scope="row"> {vendors.id} </TableCell>
        <TableCell align="right">{vendors.vendorName}</TableCell>
        <TableCell align="right">{vendors.website}</TableCell>
        <TableCell align="right">{vendors.address}</TableCell>
        <TableCell align="right">{vendors.city}</TableCell>
        <TableCell align="right">{vendors.state}</TableCell>
        <TableCell align="right">{vendors.zipcode}</TableCell>
        <TableCell align="right">{vendors.vendorNotes}</TableCell>
        </TableRow>
      );
    });
  };
 
  render() {
    return (
      <div>
        <h3>Vendor Table</h3>
        <TableContainer component={Paper}>
            <Table style={styles.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>id</TableCell>
                        <TableCell align='right'>Vendor Name</TableCell>
                        <TableCell align='right'>Website</TableCell>
                        <TableCell align='right'>Address</TableCell>
                        <TableCell align='right'>City</TableCell>
                        <TableCell align='right'>State</TableCell>
                        <TableCell align='right'>Zipcode</TableCell>
                        <TableCell align='right'>Vendor Notes</TableCell>                              
                    </TableRow>
                </TableHead>
                <TableBody>                           
                    {this.vendorMapper()}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
  }
}



