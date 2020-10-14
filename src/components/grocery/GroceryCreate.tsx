import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
};
type GroceryState = {
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
};

const types = ["", "dry", "frozen", "refrigerated"]
 
const containers = ["", "bag", "box", "carton",  "jar", "none"]

const units = ["", "each", "grams", "kilograms", "ounces", "pounds", "milliliters", "liters", "fluid ounces", "gallons", "none"]

export default class GroceryCreate extends Component<
  AcceptedProps,
  GroceryState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      upc: "",
      groceryName: "",
      storageType: "",
      storageContainer: "",
      quantity: "",
      unitOfMeasure: "",
      onHand: 0,
      groceryNotes: "",
      // userId: 0,
      locatId: 0,
      vendId: 0,
    };
  }

  handleSubmit = (event: any) => {
    if (this.props.sessionToken) {
      console.log("Before GroceryCreate Fetch");
      event.preventDefault();
      fetch(`${APIURL}/grocery/create`, {
        method: "POST",
        body: JSON.stringify({
          grocery: {
            upc: this.state.upc,
            groceryName: this.state.groceryName,
            storageType: this.state.storageType,
            storageContainer: this.state.storageContainer,
            quantity: this.state.quantity,
            unitOfMeasure: this.state.unitOfMeasure,
            onHand: this.state.onHand,
            groceryNotes: this.state.groceryNotes,
            // userId: this.state.userId,
            locatId: this.state.locatId,
            vendId: this.state.vendId,
          },
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
        <div id="groceryCreateDiv">
          <h2 id="groceryHeading">Add a Grocery Item</h2>
          <FormControl style={{backgroundColor:"#FFFFFF"}} >
            <div className="upc">
              <TextField
                label="UPC"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ upc: e.target.value });
                }}
              />        
              <TextField
                label="Grocery Item"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ groceryName: e.target.value });
                }}
              />
            </div>
            <div>    
              <FormControl className="typeInput">
                {/* <InputLabel id="demo-simple-select--label">
                  Storage Type
                </InputLabel> */}
                <Select onChange={this.handleChangeTypes}>
                  {types.map((option) => (
                    <MenuItem key={option[0]} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Storage Type</FormHelperText>
              </FormControl>
              <FormControl className="containerInput">
                {/* <InputLabel id="demo-simple-select-autowidth-label"></InputLabel> */}
                <Select onChange={this.handleChangeContainers}>
                  {containers.map((option) => (
                    <MenuItem key={option[0]} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Storage Container</FormHelperText>
              </FormControl>
              <FormControl className="unitInput">
                {/* <InputLabel id="demo-simple-select-autowidth-label"></InputLabel> */}
                <Select onChange={this.handleChangeUnits}>
                  {units.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Unit Of Measure</FormHelperText>
              </FormControl>
            </div>
            <div>
              <TextField
                label="Quantity"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ quantity: e.target.value });
                }}
              />
              <TextField
                label="On-Hand"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ onHand:  Number(e.target.value)});
                }}
              />
            </div>
            <div>
              <TextField
                label="Location Id"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ locatId:  Number(e.target.value)});
                }}
              />
              <TextField
                label="Vendor Id"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ vendId:  Number(e.target.value)});
                }}
              />
            </div>
            <TextField
              id="outlined-textarea"
              label="Grocery Notes"
              type="text"
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
              Add a Grocery Item
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}
