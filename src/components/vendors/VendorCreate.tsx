import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};
type VendorState = {
  vendorName: string;
  website: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  vendorNotes: string;
  userId: number;
};
export default class VendorCreate extends Component<
  AcceptedProps,
  VendorState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      vendorName: "",
      website: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      vendorNotes: "",
      userId: 0,
    };
  }

  handleSubmit = (event: any) => {
    console.log("Before VendorCreate Fetch");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/vendor/create`, {
        method: "POST",
        body: JSON.stringify({
          vendor: {
            vendorName: this.state.vendorName,
            website: this.state.website,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            vendorNotes: this.state.vendorNotes,
            userId: this.state.userId,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": this.props.sessionToken,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
              })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div id="vendorCreateDiv">
          <h2 id="vendorHeading">Add a Vendor</h2>
          <FormControl style={{backgroundColor:"#FFFFFF"}}>
            <div>
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
            </div>
            <TextField
              label="Address"
              variant="outlined"
              type="text"
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />

            <div>
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
                label="zipcode"
                variant="outlined"
                type="text"
                onChange={(e) => {
                    this.setState({ zipcode: e.target.value });
                  }}
              />
            </div>
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
            <Link to="/admin/vendorList">Add a Vendor</Link>
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}
