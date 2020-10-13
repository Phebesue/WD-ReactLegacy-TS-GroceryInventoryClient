import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { FormControl, TextField, Button } from "@material-ui/core";
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
  onHand: string;
  groceryNotes: string;
  // userId: number;
  locationId: string;
  vendorId: string;
};

const types = [
  {
    value: "",
    label: "",
  },
  {
    value: "dry",
    label: "dry",
  },
  {
    value: "frozen",
    label: "frozen",
  },
  {
    value: "refrigerated",
    label: "refrigerated",
  },
];
const containers = [
  {
    value: "",
    label: "",
  },
  {
    value: "bag",
    label: "bag",
  },
  {
    value: "box",
    label: "box",
  },
  {
    value: "carton",
    label: "carton",
  },
  {
    value: "jar",
    label: "jar",
  },
  {
    value: "none",
    label: "none",
  },
];
const units = [
  {
    value: "",
    label: "",
  },
  {
    value: "each",
    label: "each",
  },
  {
    value: "grams",
    label: "grams",
  },
  {
    value: "kilograms",
    label: "kilograms",
  },
  {
    value: "ounces",
    label: "ounces",
  },
  {
    value: "pounds",
    label: "pounds",
  },
  {
    value: "milliliters",
    label: "milliliters",
  },
  {
    value: "liters",
    label: "liters",
  },
  {
    value: "fluid ounces",
    label: "fluid ounces",
  },
  {
    value: "gallons",
    label: "gallons",
  },
  {
    value: "none",
    label: "none",
  },
];

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
      onHand: "",
      groceryNotes: "",
      // userId: 0,
      locationId: "",
      vendorId: "",
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
            locationId: this.state.locationId,
            vendorId: this.state.vendorId,
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
          <FormControl>
            <div className="upc">
              <TextField
                label="UPC"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ upc: e.target.value });
                }}
              />
              {/* </div>
                <div> */}
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
              {/* <FormControl>
        <InputLabel id="demo-simple-select-label">Storage Types</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={types}
          onChange={this. handleChangeTypes}
        >
             {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
        </Select>
      </FormControl> */}

              {/* <TextField
              id="outlined-select-types"
              select
              label="Storage Type"
              value={types}
              helperText="Please select your type"
              variant="outlined"
              onChange={this.handleChangeTypes}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
              {/* <TextField
                label="Storage Container"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ storageContainer: e.target.value });
                }}
              /> */}
              {/* <TextField
              id="outlined-select-containers"
              select
              label="Storage Container"
              value={containers}
              helperText="Please select your container"
              variant="outlined"
              onChange={this.handleChangeContainers}
            >
              {containers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
              {/* <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Storage Types</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={types}
          onChange={this.handleChangeTypes}
          label="Storage Types"
        >
         
            {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>))}
        </Select>
      </FormControl> */}
              {/* <TextField
                label="unitOfMeasure"
                variant="outlined"
                type="text"
                onChange={(e) => {
                  this.setState({ unitOfMeasure: e.target.value });
                }}
              /> */}
              {/* <TextField
              id="outlined-select-containers"
              select
              label="Unit Of Measure"
              value={units}
              helperText="Please select your container"
              variant="outlined"
              onChange={this.handleChangeUnits}
            >
              {units.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}

              <FormControl className="typeInput">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Storage Type
                </InputLabel>
                <Select onChange={this.handleChangeTypes}>
                  {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Storage Type</FormHelperText>
              </FormControl>

              <FormControl className="containerInput">
                <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
                <Select onChange={this.handleChangeContainers}>
                  {containers.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Storage Container</FormHelperText>
              </FormControl>
              <FormControl className="unitInput">
                <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
                <Select onChange={this.handleChangeUnits}>
                  {units.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
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
                type="text"
                onChange={(e) => {
                  this.setState({ quantity: e.target.value });
                }}
              />

              <TextField
                label="On-Hand"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ onHand: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                label="Location Id"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ locationId: e.target.value });
                }}
              />
              <TextField
                label="Vendor Id"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  this.setState({ vendorId: e.target.value });
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
