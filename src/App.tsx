import React, {Component} from 'react';
import Auth from "./auth/Auth";
// import UserEdit from "./auth/UserEdit";
// import Sitebar from "./site/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './site/Header';
import Footer from './site/Footer';

type AcceptedProps={};
type SessionState = {
  sessionToken?: string,
  clearToken?:string,
}
export default class GroceryApp extends Component<AcceptedProps, SessionState> {
  constructor(props:AcceptedProps) {
    super(props);
    this.state={
      sessionToken:""
    }
  }
componentDidMount(){
  console.log("Mounted");  
}
componentDidUpdate(){  
  console.log("Updated");  
}
      clearToken= () => {
        localStorage.clear();
        this.setState({
          sessionToken: ""
      });
      };

render(){

  return (
    <div className="App">
      <div id="main" className="sideBar">
      {/* <Header /> */}
      <Router>
        <Home
          // clearToken={this.state.clearToken}
          // token={this.state.sessionToken}
          // editUser={}
         
          />
        <div className="route">
        <Switch>
          <Route exact path="/">
          {/* {this.state.sessionToken === localStorage.getItem("token")  ?  <Redirect to="/mediaCreate" /> : null} */}
          {/* // <Auth updateToken={updateToken} />} */}
          </Route> 
          {/* {protectedViews()} */}
          <Route exact path="/auth">
            {/* <MediaCreate setMedia={setMedia} /> */}
          </Route>
          <Route exact path="/">
            {/* <MediaAll /> */}
          </Route>
          <Route exact path="/">
            {/* <MediaTable
              // media={media}
              // editUpdateMedia={editUpdateMedia}
              token={this.state.sessionToken}
              // updateOn={updateOn}
              // updateActive={updateActive}
              // mediaToUpdate={mediaToUpdate}
			        // updateOff={updateOff}
              /> */}
          </Route>
          <Route exact path="/userEdit">
            {/* <UserEdit token={this.state.sessionToken} clearToken={this.state.clearToken}/> */}
          </Route>
        </Switch>

      </div>
      </Router>
      {/* <MediaIndex /> */}
      <Footer />
    </div>
    </div>
  );
}
}
