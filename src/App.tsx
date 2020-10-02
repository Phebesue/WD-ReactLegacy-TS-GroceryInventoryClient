import React from 'react';
import {Signup} from "./auth/Signup"
import {Login} from "./auth/Login"


const App = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <Signup  onSubmit={({userName, firstName, lastName}) => { console.log(userName, firstName, lastName)}}/>
            <Login  onSubmit={({userName, password}) => { console.log(userName, password)}}/>
          
        </div>
    )
}