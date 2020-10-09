import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Radium from 'radium';
import Paper from "@material-ui/core/Paper";

type AcceptedProps = {
  updateUsername: (newUsername: string) => void;
  updateSessionToken: (newToken: string) => void;
  updateUserRole: (newUserRole: string) => void;
  sessionToken: string | null;
  username: string | null | undefined;
};
interface Results {
  id: number;
  firstName: string;
  lastName: string;
  groceryname: string;
  admin: string;
}
type GroceryDataState = {
  GroceryData: Results[];
  results: Results;
  columns: ColDef[];
};
const styles = {
  table: {
    minWidth: 650,
  },
};

export class GroceryTable extends Component<AcceptedProps, GroceryDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      GroceryData: [],
      results: {
        id: 0,
        firstName: "",
        lastName: "",
        groceryname: "",
        admin: "false",
      },
      // console.log(props),
      columns: [
        { field: "id", headerName: "Id", type: "number", width: 70 },
        { field: "firstName", headerName: "First Name", width: 130 },
        { field: "lastName", headerName: "Last Name", width: 130 },
        { field: "groceryname", headerName: "Groceryname", width: 130 },
        { field: "admin", headerName: "Is Admin?", width: 130 },
      ],
    };
  }
  //   componentDidMount() {
  //     this.fetchGroceries();
  //   }

  //   fetchGroceries = () => {
  //     if (this.props.sessionToken) {
  //       console.log("Before Groceries Fetch");
  //       fetch(`${APIURL}/grocery/all`, {
  //         method: "GET",
  //         headers: new Headers({
  //           "Content-Type": "application/json",
  //           Authorization: this.props.sessionToken,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data: Results[]) => {
  //           // console.log(groceryData);
  //           this.setState({ groceryData: data });
  //         })
  //         .then(() => {
  //           if (this.state.groceryData !== null) {
  //             console.log(this.state.groceryData);
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   };

  //   groceryMapper = () => {
  //     return this.state.groceryData.map((groceries: Results, index) => {
  //       return (
  //         //call mapper and display

  //         <TableRow key={index}>
  //           <TableCell component="th" scope="row">
  //             {groceries.id}
  //           </TableCell>
  //           <TableCell align="right">{groceries.firstName}</TableCell>
  //           <TableCell align="right">{groceries.lastName}</TableCell>
  //           <TableCell align="right">{groceries.groceryname}</TableCell>
  //           <TableCell align="right">{groceries.admin}</TableCell>
  //         </TableRow>
  //       );
  //     });
  //   };

  render() {
    return (
      <div>
        <h3>Grocery Table</h3>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Groceryname</TableCell>
                <TableCell align="right">Admin?</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{/* {this.groceryMapper()} */}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default GroceryTable;
