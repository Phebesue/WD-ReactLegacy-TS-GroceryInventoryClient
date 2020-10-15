import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { VendorDetails } from "../../Interfaces";
import DeleteIcon from "@material-ui/icons/Delete";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  vendorId: number;
};

type VendorDataState = {
  vendorData: VendorDetails[];
  results: VendorDetails;
  vendId: number;
  vendorName: string;
  website: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  vendorNotes: string;
};

export class VendorEdit extends Component<AcceptedProps, VendorDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      vendId: 0,
      vendorName: "",
      website: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      vendorNotes: "",
      vendorData: [
        {
          id: 0,
          vendorName: "",
          website: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          vendorNotes: "",
        },
      ],

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
    this.fetchVendor();
    console.log("VendorEdit Props", this.props);
  }
  fetchVendor = () => {
    if (this.props.sessionToken) {
      console.log("Before VendorEdit Fetch");
      fetch(`${APIURL}/vendor/one/${this.props.vendorId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          this.setState({ vendId: results.id });
          this.setState({ vendorName: results.vendorName });
          this.setState({ website: results.website });
          this.setState({ address: results.address });
          this.setState({ city: results.city });
          this.setState({ state: results.state });
          this.setState({ zipcode: results.zipcode });
          this.setState({ vendorNotes: results.vendorNotes });
          console.log("Record Id from VendorEdit", results.id);
        })
        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    console.log("Before VendorEdit Submit");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/vendor/update/${this.props.vendorId}`, {
        method: "PUT",
        body: JSON.stringify({
          // vendId: this.state.results.id,
          vendorName: this.state.vendorName,
          website: this.state.website,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          vendorNotes: this.state.vendorNotes,
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
      fetch(`${APIURL}/vendor/${this.props.vendorId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => {
          this.fetchVendor();
        })
        .catch((err) => alert(err));
    }
  };

  render() {
    return (
      <div>
        <div id="vendorEditDiv">
          <h2 id="vendorEditHeading">Edit a Vendor</h2>
          {/* {console.log(this.state.vendorName)} */}
          <FormControl style={{ backgroundColor: "#FFFFFF" }}>
            <TextField
              label="Vendor Name"
              variant="outlined"
              type="text"
              value={this.state.vendorName}
              onChange={(e) => {
                this.setState({ vendorName: e.target.value });
              }}
            />
            <TextField
              label="Website"
              variant="outlined"
              type="text"
              value={this.state.website}
              onChange={(e) => {
                this.setState({ website: e.target.value });
              }}
            />
            <TextField
              label="Address"
              variant="outlined"
              type="text"
              value={this.state.address}
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />
            <div>
              <TextField
                label="City"
                variant="outlined"
                type="text"
                value={this.state.city}
                onChange={(e) => {
                  this.setState({ city: e.target.value });
                }}
              />
              <TextField
                label="State"
                variant="outlined"
                type="text"
                value={this.state.state}
                onChange={(e) => {
                  this.setState({ state: e.target.value });
                }}
              />
              <TextField
                label="Zipcode"
                variant="outlined"
                type="text"
                value={this.state.zipcode}
                onChange={(e) => {
                  this.setState({ zipcode: e.target.value });
                }}
              />
            </div>
            <TextField
              id="outlined-textarea"
              label="Notes"
              type="text"
              value={this.state.vendorNotes}
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ vendorNotes: e.target.value });
              }}
            />

            <div style={{  color:"#000000",display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                onClick={(e) => {
                  this.handleSubmit(e);
                  //   console.log(`
                  // VendorName: ${this.state.vendorName},
                  // Address: ${this.state.address},
                  // `);
                }}
              >
                <EditIcon />
                <Link style={{  color:"#000000"}} to="/admin/vendorList">Update a Vendor</Link>
              </Button>

              <Link  
              to="/admin/vendorList">
                <Button
                  variant="outlined"
                  color="primary"
                  value={this.state.vendId}
                  onClick={(e) => {
                    // console.log(this.state.vendId);
                    this.handleDelete(this.state.vendId);
                  }}
                >
                  <DeleteIcon />
                  Delete Vendor
                </Button>
              </Link>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}
export default VendorEdit;
