import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { Link } from "react-router-dom";
import { VendorDetails } from "../../Interfaces";
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

type AcceptedProps = {
  sessionToken: string | null;
  vendorId: number;
  updateVendorId: (newVendorId: number) => void;
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

export default class AdminVendorTblDel extends Component<
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
          <TableCell align="right">
            <Link style={{ color: "#000000" }} to="/admin/vendorEdit">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                value="locationData.id"
                onClick={(e) => {
                  this.props.updateVendorId(vendors.id);
                }}
              >
                Edit
              </Button>
            </Link>
          </TableCell>
          {/* <TableCell>
            <Button type="submit" variant="contained" color="secondary">
              Delete
            </Button>
          </TableCell> */}
        </TableRow>
      );
    });
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
             
              </TableRow>
            </TableHead>
            <TableBody>{this.vendorMapper()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
