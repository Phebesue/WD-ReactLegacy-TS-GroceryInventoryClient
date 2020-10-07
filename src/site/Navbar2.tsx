import React, {Component} from 'react';
import Footer from "../site/Footer";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

type AcceptedProps = {
    clearUser: () => void,
    
  }

  export class Navbar2 extends Component<AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
      super(props);
      this.state = {};
      console.log(props);
    }
    render() {
    return (
        <div className="mainNav">
               <div id="navContainer"></div>
          <h3>Welcome User!</h3>

          
{/* <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul> */}
  <Button onClick={this.props.clearUser}>Logout</Button>
{console.log("Nav2 Footer")}
          {/* <Footer /> */}
        </div>
      
    )
}
  }
export default Navbar2;