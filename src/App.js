import React from "react";
import Login from "./pages/Login";



function App() {
  return (  
    <div className="login_and_registr">
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


        <div className="registr">
          <div className="background">
              <h2>Registr Here</h2>
              <p>Name</p>
              <input type="text"></input>
              <p>Last Name</p>
              <input type="text"></input>
              <p>Username</p>
              <input type="text"></input>
              <p>E-mail</p>
              <input type="text"></input>
              <p>Password</p>
              <input type="password"></input>
              <button>Registr</button>
          </div>
        </div>
    </div>
  );
}

export default App;




