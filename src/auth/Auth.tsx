import React, { Component } from "react";
import APIURL from '../helpers/environment';
// import "./Auth.css";

// import {
//   Container,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
// } from "reactstrap";

type AcceptedProps ={
	sessionToken:string,
};
type UserState ={
	firstName: string,
	lastName: string,
	userName: string,
	password:string,
	login?:string,
	signup?:string,
	title?: string,
	sessionToken:string,
	

};
export default class UserPortal extends Component<AcceptedProps, UserState> {
	constructor(props: AcceptedProps){
		super(props);
		this.state ={
			firstName:"",
			lastName:"",
			userName:"",
			password:"",
			sessionToken:""
		};
	}

componentDidMount(){
	console.log("Mounted");
}

//   const title = () => {
//     return login ? "Login" : "Signup";
//   };

//   const label = () => {
//     return !login ? "Go to Login" : "Go to Signup";

//   }
//   const loginToggle = (event) => {
//     event.preventDefault();
//     setLogin(!login);
//     setUserName("");
//     setPassword("");
//     setFirstName("");
// 	setLastName("");
// 	setPassError("");
//     setInputType("password");
//   };

//   signupFields = () =>
//     !login ? (
	// 	<div>
    //         <FormGroup row>
    //           <Label htmlFor="firstName">First Name:</Label>
    //           <br />
    //           <Input
    //             name="firstName"
    //             type="text"
    //             placeholder="First Name"
    //             required
             
    //             onChange={(e) => this.setState({ firstName : e.target.value })}
    //           />
    //         </FormGroup>
    //         <FormGroup row>
    //           <Label htmlFor="lastName">Last Name:</Label>
    //           <br />
    //           <Input
    //             name="lastName"
    //             type="text"
    //             placeholder="Last Name"
    //             required
    //           	onChange={(e) => this.setState({ lastName : e.target.value })}
    //           />
    //         </FormGroup>
    //   </div>
    // ) : null;

   handleSubmit = (event: React.FormEvent<HTMLElement>) => {
	event.preventDefault();
	// console.log(userName, password);
	if (this.state.password.length > 6){
		let userObject = {
		userName: this.state.userName,
		password: this.state.password,
		firstName: this.state.firstName,
		lastName: this.state.lastName,
		};
		// let url = login
		// ? `${APIURL}/user/login`
		// : `${APIURL}/user/signup`;
		// console.log(url);
		fetch(`${APIURL}/user/login`, {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(userObject),
		})
		.then((res) => res.json())
		.then((data) => {
			this.setState({
				sessionToken: data.sessionToken
			});

			// console.log(data.sessionToken);
		})
		.catch((err) => console.log(err));
	}
	else{
		this.setState({userName:""});
		this.setState({password:""});
		this.setState({firstName:""});
		this.setState({lastName:""});
			// this.state.passError(<span className="pass_error" style={{width: "100%", textAlign: "center"}}>Password must be 6 characters or Longer!</span>);
	}
  };
  render() {
    return(
    <div className="auth">
		<form className="form" onSubmit={this.handleSubmit} style={{margin: "50px auto 0 auto", maxWidth: "300px"}}>
			<div className="d-flex justify-content-center"><h3>Welcome{/*this.title()*/}</h3></div>
			{/* {signupFields()} */}
		<form>

	
             {/* <formGroup row> */}
               <label htmlFor="firstName">First Name:</label>
              <br />
               <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
             
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            {/* </FormGroup> */}
            {/* <FormGroup row> */}
              <label htmlFor="lastName">Last Name:</label>
              <br />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
              	onChange={(e) => this.setState({ lastName : e.target.value })}
              />
            {/* </FormGroup> */}
    
			{/* <FormGroup row> */}
				<label htmlFor="userName">UserName:</label>
				<br />
				<input
				name="userName"
				type="userName"
				placeholder="UserName"
				required
				// value={userName}
				onChange={(e) => this.setState({userName:e.target.value})}
				/>
			{/* </FormGroup> */}
		
			{/* <FormGroup row> */}
				<label htmlFor="password">Password:</label>
				<br />
				<input
				name="password"
				// type={inputType}
				placeholder="Password"
				required
				// value={password}
				onChange={(e) => this.setState({password:e.target.value})}
				/>
				{/* {passError} */}
				{/* <span className="pass_error">{passError}</span> */}
			{/* </FormGroup> */}
			</form>
			<div className="d-flex justify-content-between">
				{/* <button color="warning" type="submit">{title()}</button> */}
				{/* <button color="success" className="toggle_button" onClick={loginToggle}> */}
				{/* {label()} */}
				{/* </button> */}
			</div>
		</form>
    </div>
  );
};


}
