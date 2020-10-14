import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GroceryDetails } from "../../Interfaces";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  groceryId: number;
};

type GroceryDataState = {
  groceryData: GroceryDetails[];
  results: GroceryDetails;
  groceryId: number;
  grocId: number;
  upc: string;
  groceryName: string;
  storageType: string;
  storageContainer: string;
  quantity: string;
  unitOfMeasure: string;
  onHand: number;
  groceryNotes: string;
  locatId: number;
  vendId: number;
  grocery: any,
};

const types = ["", "dry", "frozen", "refrigerated"];

const containers = ["", "bag", "box", "carton", "jar", "none"];

const units = [
  "",
  "each",
  "grams",
  "kilograms",
  "ounces",
  "pounds",
  "milliliters",
  "liters",
  "fluid ounces",
  "gallons",
  "none",
];

export default class GroceryEdit extends Component<
  AcceptedProps,
  GroceryDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      groceryId: 0,
      grocId: 0,
      upc: "",
      groceryName: "",
      storageType: "",
      storageContainer: "",
      quantity: "0",
      unitOfMeasure: "",
      onHand: 0,
      groceryNotes: "",
      // userId: 0,
      locatId: 0,
      vendId: 0,
      grocery: {},
      groceryData: [
        {
          id: 0,
          upc: "",
          groceryName: "",
          storageType: "",
          storageContainer: "",
          quantity: "0",
          unitOfMeasure: "",
          onHand: 0,
          groceryNotes: "",
          // userId: 0,
          locationId: 0,
          vendorId: 0,
        },
      ],
      results: {
        id: 0,
        upc: "",
        groceryName: "",
        storageType: "",
        storageContainer: "",
        quantity: "0",
        unitOfMeasure: "",
        onHand: 0,
        groceryNotes: "",
        // userId: 0,
        locationId: 0,
        vendorId: 0,
      },
    };
  }
  componentDidMount() {
    this.fetchGrocery();
    console.log("GrocEdit Props", this.props);
  }
  fetchGrocery = () => {
    if (this.props.sessionToken) {
      console.log("Before GroceryEdit Fetch");
      fetch(`${APIURL}/grocery/one/${this.props.groceryId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          this.setState({ grocId: results.grocery.id });
          this.setState({ upc: results.grocery.upc });
          this.setState({ groceryName: results.grocery.groceryName });
          this.setState({ storageType: results.grocery.storageType });
          this.setState({ storageContainer: results.grocery.storageContainer });
          this.setState({ quantity: results.grocery.quantity });
          this.setState({ unitOfMeasure: results.grocery.unitOfMeasure });
          this.setState({ onHand: results.grocery.onHand });
          this.setState({ groceryNotes: results.grocery.groceryNotes });
          this.setState({ locatId: results.grocery.locationId });
          this.setState({ vendId: results.grocery.vendorId });
          console.log("Record Id from Grocery Edit: ", results.grocery.id);
        })
        .catch((err) => console.log(err));
    }
  };

  handleSubmit = (event: any) => {
    console.log("As GroceryEdit Update");
    if (this.props.sessionToken) {
      event.preventDefault();
      fetch(`${APIURL}/grocery/update/${this.props.groceryId}`, {
        method: "PUT",
        body: JSON.stringify({grocery:{

      
          // locatId: this.state.id,
          upc: this.state.upc,
          groceryName: this.state.groceryName,
          storageType: this.state.storageType,
          storageContainer: this.state.storageContainer,
          quantity: this.state.quantity,
          unitOfMeasure: this.state.unitOfMeasure,
          onHand: this.state.onHand,
          groceryNotes: this.state.groceryNotes,
          locatId: this.state.locatId,
          vendId: this.state.vendId,
        }}),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.groceryName);
        })
        .catch((err) => console.log(err));
    }
  };


  handleChangeTypes = (event: any) => {
    this.setState({ storageType: event.target.value });
  };
  handleChangeContainers = (event: any) => {
    this.setState({ storageContainer: event.target.value });
  };
  handleChangeUnits = (event: any) => {
    this.setState({ unitOfMeasure: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="groceryEditDiv">
          <h2 id="groceryEditHeading">Edit a Grocery Item</h2>
          {/* {console.log(this.state.groceryName)} */}
          <FormControl style={{ backgroundColor: "#FFFFFF" }}>
            <div>
              <TextField
                label="UPC"
                variant="outlined"
                type="text"
                value={this.state.upc}
                onChange={(e) => {
                  this.setState({ upc: e.target.value });
                }}
              />
              <TextField
                label="Grocery Item"
                variant="outlined"
                type="text"
                value={this.state.groceryName}
                onChange={(e) => {
                  this.setState({ groceryName: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-select-types"
                select
                label="Type"
                type="text"
                value={this.state.storageType}
                helperText="Please select your Type"
                variant="outlined"
                onChange={this.handleChangeTypes}
              >
                {types.map((option) => (
                  <MenuItem key={option[0]} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                // id="outlined-select-containers"
                select
                label="Container"
                type="text"
                value={this.state.storageContainer}
                helperText="Please select your Container"
                variant="outlined"
                onChange={this.handleChangeContainers}
              >
                {containers.map((option) => (
                  <MenuItem key={option[0]} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-types"
                select
                type="text"
                label="Units Of Measure"
                value={this.state.unitOfMeasure}
                helperText="Please select your Units Of Measure"
                variant="outlined"
                onChange={this.handleChangeUnits}
              >
                {units.map((option) => (
                  <MenuItem key={option[0]} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                label="Quantity"
                variant="outlined"
                type="number"
                value={this.state.quantity}
                onChange={(e) => {
                  this.setState({ quantity: e.target.value });
                }}
              />
              <TextField
                label="On-Hand"
                variant="outlined"
                type="number"
                value={this.state.onHand}
                onChange={(e) => {
                  this.setState({ onHand: Number(e.target.value) });
                }}
              />
            </div>
            <div>
              <TextField
                label="Location Id"
                variant="outlined"
                type="number"
                value={this.state.locatId}
                onChange={(e) => {
                  this.setState({ locatId: Number(e.target.value) });
                }}
              />
              <TextField
                label="Vendor Id"
                variant="outlined"
                type="number"
                value={this.state.vendId}
                onChange={(e) => {
                  this.setState({ vendId: Number(e.target.value) });
                }}
              />
            </div>
            <TextField
              id="outlined-textarea"
              label="Grocery Notes"
              type="text"
              value={this.state.groceryNotes}
              multiline
              variant="outlined"
              onChange={(e) => {
                this.setState({ groceryNotes: e.target.value });
              }}
            />
            <Button
              variant="contained"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
             
              <Link to="/admin/groceryList"> Edit a Grocery Item</Link>
            </Button>
            {/* <Button
                variant="outlined"
                color="primary"
                value={this.state.locatId}
                onClick={(e) => {
                  // console.log(this.state.id);
                  this.handleDelete(this.state.locatId);               
                }}
              >
                <DeleteIcon />
                <Link to="/admin/groceryList"> Delete Location</Link>
              </Button> */}
          </FormControl>
        </div>
      </div>
    );
  }
}
