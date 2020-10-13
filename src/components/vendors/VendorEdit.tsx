import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {VendorDetails} from '../../Interfaces';
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
  vendorId: number;
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
      vendorId: 0,
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
  }
  fetchVendor = () => {
    if (this.props.sessionToken) {
      console.log("Before VendorEdit Fetch");
      fetch(`${APIURL}/vendor/:id`, {
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

  handleSubmit = (event: any) => {
    console.log("Before VendorEdit Fetch");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/user/`, {
        method: "PUT",
        body: JSON.stringify({
          vendorId: this.state.results.id,
          vendorName: this.state.results.vendorName,
          website: this.state.results.website,
          address: this.state.results.address,
          city: this.state.results.city,
          state: this.state.results.state,
          zipcode: this.state.results.zipcode,
          vendorNotes: this.state.results.vendorNotes,
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
    //   fetch(`${APIURL}/user/${this.state.results.vendorId}`, {
      fetch(`${APIURL}/user/${id}`, {
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
          <FormControl>
            <TextField
              label="Vendor Name"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ vendorName: e.target.value });
              }}
            />

            <TextField
              label="Website"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ website: e.target.value });
              }}
            />
            <TextField
              label="Address"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />

            <TextField
              label="City"
              variant="outlined"
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
            />
            <TextField
              label="State"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ state: e.target.value });
              }}
            />
            <TextField
              label="Zipcode"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ zipcode: e.target.value });
              }}
            />
            <TextField
              id="outlined-textarea"
              label="Notes"
              type="text"
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ vendorNotes: e.target.value });
              }}
            />

            <Button
              variant="contained"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              {/* Update a Vendor */}
              <Link to="/admin/vendorList"> Update a Vendor </Link>
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}
export default VendorEdit;
