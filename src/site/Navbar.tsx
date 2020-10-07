import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

type AcceptedProps = {
  clearUser: () => void,
  
}

type ValueTypes = {
  token: any,
  userName: string | any,
  userRole: string | any,

}

class Navbar extends Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps){
      super(props);
      this.state = {
          token: "",
          userName: "",
          userRole: "",
         };
      console.log(props)
  }

render() {
  const session = localStorage.getItem("sessionToken");

  return (
    <div className="sidebar">
      <div className="mainNav"> 
      <h3>What's for dinner? Navbar</h3>
    {/* let container
    if (session !== null) {
     <div>
    <Router>
      <nav id="navbar">
        <ul>
          <li id="name"><a href="#" className="nav-link">What's for dinner?</a></li>
          <li><Link to="/" className="nav-link" onClick={this.clearUser}> Logout </Link></li>
          <li><a href="#" className="nav-link">My Account</a></li>
          <li>
            <Link to="/cart" className="nav-link"> Cart </Link>
          </li>
          <li>
            <Link to="/" className="nav-link"> Home </Link>
          </li>
        </ul>
      </nav>
      <div className="navbarRoute">
        <Switch>
          <Route exact path="/"> 
            <User clearUser={this.clearUser} sessionToken={session} userRole={this.state.userRole} /> 
          </Route>
          <Route exact path="/cart">
            {/* <Admin sessionToken={this.state.sessionToken} /> 
          </Route>
        </Switch>
      </div>
    </Router> */}
                  <Button            
                    onClick={this.props.clearUser}
                  >LogOut         
                  </Button>
  </div>        
   
    </div>
    

)
};
}
export default Navbar;
