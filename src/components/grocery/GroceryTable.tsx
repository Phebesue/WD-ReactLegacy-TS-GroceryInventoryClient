import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import {Button, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import {GroceryDetails, Groc} from '../../Interfaces'


type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};

type GroceryDataState = {
  groceryData: [GroceryDetails];
  results: GroceryDetails;
  

};
const styles = {
  table: {
    minWidth: 650,
  },
};

export default class AdminGroceryMgmt extends Component<AcceptedProps, GroceryDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      groceryData: [{
        id: 0,
        upc: "",
        groceryName: "",
        storageType: "",
        storageContainer: "",
        quantity: "",
        unitOfMeasure: "",
        onHand: 0,
        groceryNotes: "",
        locationId: 0,
        vendorId: 0,}],
      results: {
        id: 0,
        upc: "",
        groceryName: "",
        storageType: "",
        storageContainer: "",
        quantity: "",
        unitOfMeasure: "",
        onHand: 0,
        groceryNotes: "",
        locationId: 0,
        vendorId: 0,
      }
      }
    };
  
    componentDidMount() {
      this.fetchGroceries();
    }

    fetchGroceries = () => {
      if (this.props.sessionToken) {
        console.log("Before Groceries Fetch");
        fetch(`${APIURL}/grocery/all`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": this.props.sessionToken,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            this.setState({ groceryData: data.grocery });
         
          })
          .then(() => {
            if (this.state.groceryData !== null) {
              console.log(this.state.groceryData);
            }
          })
          .catch((err) => console.log(err));
      }
    };

    groceryMapper = () => {
      return this.state.groceryData.map((groceries: GroceryDetails, index) => {
        return (
    
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {groceries.id}
            </TableCell>
            <TableCell align="right">{groceries.upc}</TableCell>
            <TableCell align="right">{groceries.groceryName}</TableCell>
            <TableCell align="right">{groceries.storageType}</TableCell>
            <TableCell align="right">{groceries.storageContainer}</TableCell>
            <TableCell align="right">{groceries.quantity}</TableCell>
            <TableCell align="right">{groceries.unitOfMeasure}</TableCell>
            <TableCell align="right">{groceries.onHand}</TableCell>
            <TableCell align="right">{groceries.locationId}</TableCell>
            <TableCell align="right">{groceries.vendorId}</TableCell>
            <TableCell>
            <Button type="submit" variant="contained" color="primary">
              Edit
            </Button>
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
        console.log("Welcome to grocery data"),
      <div>
        <h3>Grocery Table</h3>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">UPC</TableCell>
                <TableCell align="right">Grocery Item</TableCell>
                <TableCell align="right">Storage Type</TableCell>
                <TableCell align="right">Storage Container</TableCell>
                <TableCell align="right">Unit Of Measure</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">On-Hand</TableCell>
                <TableCell align="right">Location Id</TableCell>
                <TableCell align="right">Vendor Id</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.groceryMapper()} 
              </TableBody>
            {/* {console.log("Welcome to grocery mapper")} */}
          </Table>
        </TableContainer>
      </div>
    );
  }
}

