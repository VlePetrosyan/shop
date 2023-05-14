import React from "react";
import Login from "./pages/Login";



function App() {
  return (
    <div className="all">
      <h1>Log in</h1>
      <div className="imput_one">
        <p>Username or Email Address</p>
        <div className="search_one">
          <input type="search"></input>
        </div>

        <div className="input_two">
           <p>Password</p>
           <input type="password"></input>
        </div> 

        <button>Log In</button>  
          <p>Lost Your Password ?</p>
          <p>Go Back To Menu</p>  
      </div>
    </div>
  );
}

export default App;
