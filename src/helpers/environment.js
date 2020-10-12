let APIURL = "";

// console.log(window.location.hostname);
switch (window.location.hostname) {
   //local host React app
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3020";
    break;
  //deployed React application
//   case "tl-my-mediacollection-client.herokuapp.com":
	// APIURL = "https://whats-for-dinner-server.herokuapp.com";
    break;
	
	default: 
       alert('URL Error!');
       break;
}
export default APIURL;