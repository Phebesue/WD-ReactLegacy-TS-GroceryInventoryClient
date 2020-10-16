import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { Link } from "react-router-dom";
import { VendorDetails } from "../../Interfaces";
import VendorEdit from "./VendorEdit";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
// import Radium from 'radium';

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};

type VendorDataState = {
  vendorData: VendorDetails[];
  results: VendorDetails;
};
const styles = {
  table: {
    minWidth: 650,
  },
};

export default class VendorTable extends Component<
  AcceptedProps,
  VendorDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    //   console.log(props),
    this.state = {
      vendorData: [],
      results: {
        id: 0,
        vendorName: "",
        website: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        vendorNotes: "",
      },
    };
  }
  componentDidMount() {
    this.fetchVendors();
  }
  fetchVendors = () => {
    console.log("Before Vendor Table Fetch");
    if (this.props.sessionToken) {
      fetch(`${APIURL}/vendor/all`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data: VendorDetails[]) => {
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
    return this.state.vendorData.map((vendors: VendorDetails, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {vendors.id}{" "}
          </TableCell>
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

  handleDelete = (id: number | undefined) => {
    if (this.props.sessionToken) {
         fetch(`${APIURL}/user/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => {
          this.fetchVendors();
          })
        .catch((err) => alert(err));
    }
  };

  render() {
    return (
      <div>
        <h3>Vendor Table</h3>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">Vendor Name</TableCell>
                <TableCell align="right">Website</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Zipcode</TableCell>
                <TableCell align="right">Vendor Notes</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.vendorMapper()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
